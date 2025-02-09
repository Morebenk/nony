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
