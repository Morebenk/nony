import { writable, derived, type Writable } from 'svelte/store'
import type { Quiz, Question, QuizProgress, QuizSession } from '$lib/types/quiz'
import type { QuizAnswer } from '$lib/types/quiz'




const createQuizSession = () => {
  const { subscribe, set, update }: Writable<QuizSession | null> = writable(null)

  return {
    subscribe,
    initialize: (quiz: Quiz) => {
      set({
        quiz_id: quiz.id,
        quiz,
        answers: {},
        current_question_id: quiz.questions[0]?.id || null,
        score: 0,
        started_at: new Date().toISOString(),
        completed_at: null
      })
    },
    answer: (payload: { question_id: string; choice_id: string }) => {
      update(session => {
        if (!session) return session
        const newAnswers = { ...session.answers }
        const attempt_id = crypto.randomUUID()
        newAnswers[payload.question_id] = {
          attempt_id,
          question_id: payload.question_id,
          choice_id: payload.choice_id,
          status: 'answered',
          time_spent: 0,
          is_correct: undefined,
          bookmarked: false
        }
        return { ...session, answers: newAnswers }
      })
    },
    toggleBookmark: (questionId: string) => {
      update(session => {
        if (!session) return session
        const answer = session.answers[questionId]
        if (!answer) return session
        
        const newAnswers = { ...session.answers }
        newAnswers[questionId] = {
          ...answer,
          bookmarked: !answer.bookmarked
        }
        return { ...session, answers: newAnswers }
      })
    },
    setCurrentQuestion: (question: Question) => {
      update(session => {
        if (!session) return session
        return {
          ...session,
          current_question_id: question.id
        }
      })
    },
    complete: () => {
      update(session => {
        if (!session) return session
        return {
          ...session,
          completed_at: new Date().toISOString()
        }
      })
    },
    reset: () => set(null)
  }
}

export const quizSession = createQuizSession()

// Derived stores
export const currentQuestion = derived<typeof quizSession, Question | null>(
  quizSession,
  ($session) => {
    if (!$session?.current_question_id || !$session.quiz) {
      return null
    }
    return $session.quiz.questions.find(q => q.id === $session.current_question_id) || null
  }
)

export const currentAnswer = derived<typeof quizSession, QuizAnswer | null>(
  quizSession,
  ($session) => {
    if (!$session?.current_question_id) {
      return null
    }
    return $session.answers[$session.current_question_id] || null
  }
)

export const quizProgress = derived<typeof quizSession, QuizProgress>(
  quizSession,
  ($session) => {
    if (!$session) {
      return {
        total: 0,
        answered: 0,
        remaining: 0,
        percentage: 0,
        score: 0
      }
    }

    const total = $session.quiz.questions.length
    const answered = Object.values($session.answers).filter(a => a.status === 'answered').length

    return {
      total,
      answered,
      remaining: total - answered,
      percentage: Math.round((answered / total) * 100),
      score: $session.score
    }
  }
)

// Type guard for runtime answer
export function isRuntimeAnswer(answer: unknown): answer is QuizAnswer {
  return !!answer && typeof answer === 'object' && 'status' in answer && 'bookmarked' in answer
}