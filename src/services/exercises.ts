export enum ExerciseType {
  LISTENING = "listening",
  TRANSLATION_KO_IT = "translation_ko_it",
  TRANSLATION_IT_KO = "translation_it_ko",
  SENTENCE_BUILDING = "sentence_building",
}

export interface Exercise {
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer: string;
  translation?: string;
  audioData?: string;
  tiles?: string[];
}

const STATIC_EXERCISES: Record<ExerciseType, Exercise[]> = {
  [ExerciseType.LISTENING]: [
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "안녕하세요", options: ["안녕하세요", "감사합니다", "미안합니다", "여보세요"], translation: "Buongiorno/Ciao" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "물", options: ["물", "불", "흙", "공기"], translation: "Acqua" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "사과", options: ["사과", "배", "포도", "수박"], translation: "Mela" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "학교", options: ["학교", "병원", "은행", "공원"], translation: "Scuola" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "친구", options: ["친구", "선생님", "학생", "의사"], translation: "Amico" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "우유", options: ["우유", "주스", "커피", "콜라"], translation: "Latte" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "빵", options: ["빵", "밥", "면", "고기"], translation: "Pane" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "바다", options: ["바다", "산", "강", "하늘"], translation: "Mare" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "고양이", options: ["고양이", "강아지", "토끼", "새"], translation: "Gatto" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "집", options: ["집", "방", "문", "창문"], translation: "Casa" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "책", options: ["책", "연필", "지우개", "가방"], translation: "Libro" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "영화", options: ["영화", "음악", "그림", "춤"], translation: "Film" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "여름", options: ["여름", "봄", "가을", "겨울"], translation: "Estate" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "오늘", options: ["오늘", "내일", "어제", "모레"], translation: "Oggi" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "사람", options: ["사람", "남자", "여자", "아이"], translation: "Persona" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "커피", options: ["커피", "차", "물", "술"], translation: "Caffè" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "선생님", options: ["선생님", "학생", "교수", "원장"], translation: "Insegnante" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "병원", options: ["병원", "약국", "은행", "우체국"], translation: "Ospedale" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "지하철", options: ["지하철", "버스", "택시", "기차"], translation: "Metropolitana" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "옷", options: ["옷", "신발", "모자", "가방"], translation: "Vestiti" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "돈", options: ["돈", "카드", "지갑", "표"], translation: "Soldi" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "노래", options: ["노래", "가사", "가수", "악기"], translation: "Canzone" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "공부", options: ["공부", "일", "운동", "휴식"], translation: "Studio" },
    { type: ExerciseType.LISTENING, question: "", correctAnswer: "선물", options: ["선물", "편지", "꽃", "케이크"], translation: "Regalo" },
  ],
  [ExerciseType.TRANSLATION_KO_IT]: [
    { type: ExerciseType.TRANSLATION_KO_IT, question: "감사합니다", correctAnswer: "grazie" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "미안합니다", correctAnswer: "scusa" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "저는 학생입니다", correctAnswer: "io sono uno studente" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "이것은 무엇입니까?", correctAnswer: "cos'è questo?" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "한국어를 공부해요", correctAnswer: "studio il coreano" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "어디에 가요?", correctAnswer: "dove vai?" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "배가 고파요", correctAnswer: "ho fame" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "날씨가 추워요", correctAnswer: "fa freddo" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "이름이 뭐예요?", correctAnswer: "come ti chiami?" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "만나서 반가워요", correctAnswer: "piacere di conoscerti" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "잘 자요", correctAnswer: "buonanotte" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "사랑해요", correctAnswer: "ti amo" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "도와주세요", correctAnswer: "aiutami" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "얼마예요?", correctAnswer: "quanto costa?" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "화장실이 어디예요?", correctAnswer: "dov'è il bagno?" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "이거 주세요", correctAnswer: "mi dia questo per favore" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "천천히 말해 주세요", correctAnswer: "parli lentamente per favore" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "다시 말해 주세요", correctAnswer: "ripeta per favore" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "이해 못 해요", correctAnswer: "non capisco" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "알아요", correctAnswer: "lo so" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "몰라요", correctAnswer: "non lo so" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "진짜요?", correctAnswer: "davvero?" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "대박!", correctAnswer: "fantastico!" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "수고하셨습니다", correctAnswer: "buon lavoro" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "맛있어요", correctAnswer: "è buono" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "재미있어요", correctAnswer: "è divertente" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "피곤해요", correctAnswer: "sono stanco" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "바빠요", correctAnswer: "sono occupato" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "괜찮아요", correctAnswer: "va bene" },
    { type: ExerciseType.TRANSLATION_KO_IT, question: "잠시만요", correctAnswer: "un momento" },
  ],
  [ExerciseType.TRANSLATION_IT_KO]: [
    { type: ExerciseType.TRANSLATION_IT_KO, question: "grazie", correctAnswer: "감사합니다" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "scusa", correctAnswer: "미안합니다" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "buongiorno", correctAnswer: "안녕하세요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "mi chiamo...", correctAnswer: "제 이름은..." },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "dove vai?", correctAnswer: "어디 가요?" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "ho fame", correctAnswer: "배가 고파요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "piacere di conoscerti", correctAnswer: "만나서 반가워요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "studio il coreano", correctAnswer: "한국어를 공부해요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "cos'è questo?", correctAnswer: "이것은 무엇입니까?" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "fa caldo", correctAnswer: "날씨가 더워요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "mi piace", correctAnswer: "좋아해요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "non lo so", correctAnswer: "모르겠어요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "va bene", correctAnswer: "괜찮아요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "per favore", correctAnswer: "부탁합니다" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "ci vediamo", correctAnswer: "또 봐요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "ho capito", correctAnswer: "알겠어요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "non ho capito", correctAnswer: "이해 못 했어요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "mi aiuti", correctAnswer: "도와주세요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "quanto costa?", correctAnswer: "얼마예요?" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "è caro", correctAnswer: "비싸요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "è economico", correctAnswer: "싸요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "mi piace molto", correctAnswer: "정말 좋아해요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "non mi piace", correctAnswer: "안 좋아해요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "voglio mangiare", correctAnswer: "먹고 싶어요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "voglio bere", correctAnswer: "마시고 싶어요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "voglio andare", correctAnswer: "가고 싶어요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "ho sete", correctAnswer: "목말라요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "sono felice", correctAnswer: "행복해요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "sono triste", correctAnswer: "슬퍼요" },
    { type: ExerciseType.TRANSLATION_IT_KO, question: "che ore sono?", correctAnswer: "몇 시예요?" },
  ],
  [ExerciseType.SENTENCE_BUILDING]: [
    { type: ExerciseType.SENTENCE_BUILDING, question: "Io mangio una mela", correctAnswer: "저는 사과를 먹어요", tiles: ["저는", "사과를", "먹어요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Questo è un libro", correctAnswer: "이것은 책이에요", tiles: ["이것은", "책이에요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Il tempo è bello", correctAnswer: "날씨가 좋아요", tiles: ["날씨가", "좋아요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Vado a scuola", correctAnswer: "학교에 가요", tiles: ["학교에", "가요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Mi piace il coreano", correctAnswer: "한국어가 좋아요", tiles: ["한국어가", "좋아요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Oggi è lunedì", correctAnswer: "오늘은 월요일이에요", tiles: ["오늘은", "월요일이에요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Bevo acqua", correctAnswer: "물을 마셔요", tiles: ["물을", "마셔요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Guardo un film", correctAnswer: "영화를 봐요", tiles: ["영화를", "봐요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Leggo un libro", correctAnswer: "책을 읽어요", tiles: ["책을", "읽어요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Ascolto musica", correctAnswer: "음악을 들어요", tiles: ["음악을", "들어요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Dormo a casa", correctAnswer: "집에서 자요", tiles: ["집에서", "자요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Incontro un amico", correctAnswer: "친구를 만나요", tiles: ["친구를", "만나요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Compro il pane", correctAnswer: "빵을 사요", tiles: ["빵을", "사요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Cucino il riso", correctAnswer: "밥을 요리해요", tiles: ["밥을", "요리해요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Scrivo una lettera", correctAnswer: "편지를 써요", tiles: ["편지를", "써요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Vado in Corea", correctAnswer: "한국에 가요", tiles: ["한국에", "가요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Studio in biblioteca", correctAnswer: "도서관에서 공부해요", tiles: ["도서관에서", "공부해요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Mangio con gli amici", correctAnswer: "친구들과 먹어요", tiles: ["친구들과", "먹어요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Guardo la TV", correctAnswer: "텔레비전을 봐요", tiles: ["텔레비전을", "봐요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Faccio sport", correctAnswer: "운동을 해요", tiles: ["운동을", "해요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Lavoro in ufficio", correctAnswer: "사무실에서 일해요", tiles: ["사무실에서", "일해요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "C'è un gatto", correctAnswer: "고양이가 있어요", tiles: ["고양이가", "있어요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Non c'è tempo", correctAnswer: "시간이 없어요", tiles: ["시간이", "없어요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Fa bel tempo", correctAnswer: "날씨가 참 좋아요", tiles: ["날씨가", "참", "좋아요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Mi piace la pizza", correctAnswer: "피자를 좋아해요", tiles: ["피자를", "좋아해요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Il caffè è amaro", correctAnswer: "커피가 써요", tiles: ["커피가", "써요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Il mare è blu", correctAnswer: "바다가 파래요", tiles: ["바다가", "파래요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Studio molto", correctAnswer: "공부를 많이 해요", tiles: ["공부를", "많이", "해요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Sono stanco oggi", correctAnswer: "오늘은 피곤해요", tiles: ["오늘은", "피곤해요"] },
    { type: ExerciseType.SENTENCE_BUILDING, question: "Il libro è interessante", correctAnswer: "책이 재미있어요", tiles: ["책이", "재미있어요"] },
  ],
};

let lastExerciseIndex: Record<string, number> = {};

export async function generateExercise(type: ExerciseType): Promise<Exercise> {
  const exercises = STATIC_EXERCISES[type];
  let index = Math.floor(Math.random() * exercises.length);
  
  // Try to avoid repeating the same exercise twice in a row
  if (exercises.length > 1 && lastExerciseIndex[type] === index) {
    index = (index + 1) % exercises.length;
  }
  
  lastExerciseIndex[type] = index;
  const exercise = { ...exercises[index] };
  
  if (type === ExerciseType.LISTENING && exercise.options) {
    exercise.options = [...exercise.options].sort(() => Math.random() - 0.5);
  }

  if (type === ExerciseType.SENTENCE_BUILDING && exercise.tiles) {
    exercise.tiles = [...exercise.tiles].sort(() => Math.random() - 0.5);
  }

  return exercise;
}

export async function generateTTS(_text: string): Promise<string> {
  return ""; // Not used anymore, we'll use browser TTS
}
