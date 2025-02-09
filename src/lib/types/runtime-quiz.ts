import type { Database } from '$lib/DatabaseDefinitions'

type Tables = Database['public']['Tables']
type QuizRow = Tables['quizzes']['Row']
type QuestionRow = Tables['questions']['Row']
type ChoiceRow = Tables['choices']['Row']
type QuizAttemptRow = Tables['quiz_attempts']['Row']

/**
 * Represents a quiz attempt answer with runtime metadata
 */
export interface RuntimeQuizAnswer {
  attempt_id: string
  question_id: string
  choice_id: string
  status: 'answered' | 'skipped'
  time_spent: number
  is_correct?: boolean
  bookmarked: boolean
}

/**
 * Represents the current state of a quiz attempt
 */
export interface QuizAttempt extends QuizAttemptRow {
  answers: Record<string, RuntimeQuizAnswer>
}

/**
 * Complete quiz with questions, choices, and attempt
 */
export interface RuntimeQuiz extends QuizRow {
  questions: Array<QuestionRow & {
    choices: ChoiceRow[]
  }>
  attempt?: QuizAttempt | null
}

/**
 * Quiz update payload for saving progress
 */
export interface QuizUpdatePayload {
  attempt_id: string
  current_question_id: string | null
  answers: Record<string, RuntimeQuizAnswer>
  score?: number
  completed_at?: string | null
}

/**
 * Type guard for runtime answer
 */
export function isRuntimeAnswer(answer: unknown): answer is RuntimeQuizAnswer {
  return (
    !!answer &&
    typeof answer === 'object' &&
    'status' in answer &&
    'bookmarked' in answer &&
    'choice_id' in answer
  )
}