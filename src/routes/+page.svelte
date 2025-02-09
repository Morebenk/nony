<script lang="ts">
  import "../../app.css"
  import type { Quiz } from "$lib/types/quiz"
  import { QuizShell } from "$lib/components/quiz"
  import { quizSession } from "$lib/stores/quizSessionStore"
  import { extractedQuiz } from "./test-quiz/output"

  const mockQuiz = extractedQuiz
  // Mock data for demonstration
  // Initialize quiz data
  // const mockQuiz: Quiz = {
  //   id: "quiz-1",
  //   title: "Geography Quiz",
  //   description: "Test your knowledge of world capitals",
  //   category_id: "geography",
  //   is_active: true,
  //   is_free: true,
  //   created_at: new Date().toISOString(),
  //   questions: [
  //     {
  //       id: "q1",
  //       content: "What is the capital of France?",
  //       category_id: "geography",
  //       image_url: "https://picsum.photos/400/200",
  //       explanation: "Paris is the capital and largest city of France.",
  //       choices: [
  //         {
  //           id: "c1",
  //           content: "Paris",
  //           explanation: "Correct! Paris is the capital of France.",
  //           question_id: "q1",
  //           is_correct: true,
  //         },
  //         {
  //           id: "c2",
  //           content: "London",
  //           explanation: "London is the capital of the United Kingdom.",
  //           question_id: "q1",
  //           is_correct: false,
  //         },
  //         {
  //           id: "c3",
  //           content: "Berlin",
  //           explanation: "Berlin is the capital of Germany.",
  //           question_id: "q1",
  //           is_correct: false,
  //         },
  //         {
  //           id: "c4",
  //           content: "Madrid",
  //           explanation: "Madrid is the capital of Spain.",
  //           question_id: "q1",
  //           is_correct: false,
  //         },
  //       ],
  //     },
  //   ],
  // }

  // const currentQuestion: Question = mockQuiz.questions[0]

  // Initialize quiz session immediately
  quizSession.initialize(mockQuiz)
</script>

<div class="min-h-screen bg-base-100">
  <!-- Main Quiz Shell Demo -->
  <QuizShell quiz={mockQuiz} />
</div>

