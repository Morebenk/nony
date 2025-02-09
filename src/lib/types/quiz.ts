export interface Quiz {
  id: string;
  title: string;
  description: string | null;
  category_id: string;
  is_active: boolean;
  is_free: boolean;
  created_at: string;
  questions: Question[];
}

export interface Question {
  id: string;
  content: string;
  category_id: string | null;
  image_url: string | null;
  explanation: string | null;
  choices: Choice[];
}

export interface Choice {
  id: string;
  content: string;
  explanation: string | null;
  question_id: string;
  is_correct?: boolean;
}

export interface QuizProgress {
  total: number;
  answered: number;
  remaining: number;
  percentage: number;
  score: number;
}

export interface QuizSession {
  quiz_id: string;
  quiz: Quiz;
  answers: Record<string, RuntimeQuizAnswer>;
  current_question_id: string | null;
  score: number;
  started_at: string;
  completed_at: string | null;
}

export type QuizAnswer = RuntimeQuizAnswer;

export interface RuntimeQuizAnswer {
  attempt_id: string;
  question_id: string;
  choice_id: string;
  status: "answered" | "skipped";
  time_spent: number;
  is_correct?: boolean;
  bookmarked: boolean;
}
