/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  Trophy, 
  BookOpen, 
  Languages, 
  LayoutGrid,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { generateExercise, Exercise, ExerciseType } from './services/exercises';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedTileIndices, setSelectedTileIndices] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedType, setSelectedType] = useState<ExerciseType | 'random'>('random');

  const [exerciseKey, setExerciseKey] = useState(0);

  const fetchNextExercise = useCallback(async () => {
    setLoading(true);
    setFeedback(null);
    setAnswer('');
    setSelectedTileIndices([]);
    setExerciseKey(prev => prev + 1);
    
    try {
      const type = selectedType === 'random' 
        ? Object.values(ExerciseType)[Math.floor(Math.random() * Object.values(ExerciseType).length)]
        : selectedType;
      
      const exercise = await generateExercise(type);
      setCurrentExercise(exercise);
    } catch (error) {
      console.error("Failed to fetch exercise:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedType]);

  useEffect(() => {
    fetchNextExercise();
  }, [fetchNextExercise]);

  const playAudio = () => {
    if (currentExercise?.correctAnswer) {
      const utterance = new SpeechSynthesisUtterance(currentExercise.correctAnswer);
      utterance.lang = 'ko-KR';
      window.speechSynthesis.speak(utterance);
    }
  };

  const checkAnswer = () => {
    if (!currentExercise) return;

    let isCorrect = false;
    let message = '';

    if (currentExercise.type === ExerciseType.SENTENCE_BUILDING) {
      const builtSentence = selectedTileIndices.map(idx => currentExercise.tiles![idx]).join('').replace(/\s+/g, '').trim();
      const correctSentence = currentExercise.correctAnswer.replace(/\s+/g, '').trim();
      isCorrect = builtSentence === correctSentence;
      message = isCorrect ? 'Ottimo lavoro!' : `Sbagliato. La risposta corretta era: ${currentExercise.correctAnswer}`;
    } else {
      const normalizedAnswer = answer.toLowerCase().trim();
      const normalizedCorrect = currentExercise.correctAnswer.toLowerCase().trim();
      isCorrect = normalizedAnswer === normalizedCorrect;
      message = isCorrect ? 'Corretto!' : `Sbagliato. La risposta corretta era: ${currentExercise.correctAnswer}`;
    }

    setFeedback({ isCorrect, message });
    
    if (isCorrect) {
      setScore(s => s + 10);
      setStreak(s => s + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setStreak(0);
    }
  };

  const handleTileClick = (index: number, isSelected: boolean) => {
    if (isSelected) {
      setSelectedTileIndices(prev => prev.filter(i => i !== index));
    } else {
      setSelectedTileIndices(prev => [...prev, index]);
    }
  };

  const renderExercise = () => {
    if (!currentExercise) return null;

    switch (currentExercise.type) {
      case ExerciseType.LISTENING:
        return (
          <div className="space-y-6">
            <div className="flex justify-center">
              <button 
                onClick={playAudio}
                className="p-8 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors shadow-lg group"
              >
                <Volume2 size={48} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {currentExercise.options?.map((option, i) => (
                <button
                  key={i}
                  onClick={() => setAnswer(option)}
                  className={cn(
                    "p-4 text-xl font-medium rounded-xl border-2 transition-all",
                    answer === option 
                      ? "border-indigo-600 bg-indigo-50 text-indigo-700" 
                      : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case ExerciseType.TRANSLATION_KO_IT:
      case ExerciseType.TRANSLATION_IT_KO:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{currentExercise.question}</h2>
              <p className="text-gray-500 italic">Traduci in {currentExercise.type === ExerciseType.TRANSLATION_KO_IT ? 'Italiano' : 'Coreano'}</p>
            </div>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Scrivi la traduzione..."
              className="w-full p-4 text-xl border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
            />
          </div>
        );

      case ExerciseType.SENTENCE_BUILDING:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{currentExercise.question}</h2>
              <p className="text-gray-500">Costruisci la frase in coreano</p>
            </div>
            
            <div className="min-h-[80px] p-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-wrap gap-2 items-center">
              {selectedTileIndices.map((idx, i) => (
                <motion.button
                  layoutId={`tile-${idx}`}
                  key={`selected-${i}`}
                  onClick={() => handleTileClick(idx, true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition-colors"
                >
                  {currentExercise.tiles![idx]}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {currentExercise.tiles?.map((tile, i) => {
                const isUsed = selectedTileIndices.includes(i);
                
                return (
                  <motion.button
                    layoutId={`tile-${i}`}
                    key={i}
                    disabled={feedback !== null || isUsed}
                    onClick={() => handleTileClick(i, false)}
                    className={cn(
                      "px-4 py-2 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:border-indigo-300 transition-all",
                      isUsed && "opacity-0 pointer-events-none",
                      feedback && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {tile}
                  </motion.button>
                );
              })}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-900 selection:bg-indigo-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
              <Languages size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Lingua Coreana</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-orange-500 font-bold">
              <Trophy size={20} />
              <span>{score}</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold">
              <span className="text-sm uppercase tracking-wider">Streak</span>
              <span className="bg-indigo-100 px-2 py-0.5 rounded-full">{streak}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Exercise Selector */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {[
            { id: 'random', label: 'Misto', icon: RefreshCw },
            { id: ExerciseType.LISTENING, label: 'Ascolto', icon: Volume2 },
            { id: ExerciseType.TRANSLATION_KO_IT, label: 'KO → IT', icon: Languages },
            { id: ExerciseType.TRANSLATION_IT_KO, label: 'IT → KO', icon: BookOpen },
            { id: ExerciseType.SENTENCE_BUILDING, label: 'Costruzione', icon: LayoutGrid },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id as any)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                selectedType === type.id 
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" 
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              )}
            >
              <type.icon size={16} />
              {type.label}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden min-h-[400px] flex flex-col">
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center space-y-4"
                >
                  <Loader2 className="animate-spin text-indigo-600" size={48} />
                  <p className="text-gray-500 font-medium">Preparazione esercizio...</p>
                </motion.div>
              ) : (
                <motion.div
                  key={exerciseKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-2xl mx-auto"
                >
                  {renderExercise()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <div className="max-w-2xl mx-auto flex items-center justify-between">
              <div className="flex-1">
                <AnimatePresence>
                  {feedback && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cn(
                        "flex items-center gap-3 font-semibold",
                        feedback.isCorrect ? "text-emerald-600" : "text-rose-600"
                      )}
                    >
                      {feedback.isCorrect ? <CheckCircle2 /> : <XCircle />}
                      <span>{feedback.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex gap-4">
                {!feedback ? (
                  <button
                    disabled={loading || (currentExercise?.type === ExerciseType.SENTENCE_BUILDING ? selectedTileIndices.length === 0 : !answer)}
                    onClick={checkAnswer}
                    className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-100"
                  >
                    Controlla
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={fetchNextExercise}
                    className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
                  >
                    Continua
                    <ArrowRight size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-4 py-12 text-center text-gray-400 text-sm">
        <p>© 2026 Lingua Coreana - Esercizi Interattivi</p>
      </footer>
    </div>
  );
}
