import { create } from 'zustand'
import { Question } from '../types/question'

interface QuestionStore {
  questions: Question[]
  currentQuestion: Question | null
  addQuestion: (question: Question) => void
  updateQuestion: (question: Question) => void
  deleteQuestion: (id: string) => void
  setCurrentQuestion: (question: Question | null) => void
  getQuestion: (id: string) => Question | undefined
}

export const useQuestionStore = create<QuestionStore>((set, get) => ({
  questions: [],
  currentQuestion: null,

  addQuestion: (question) =>
    set((state) => ({
      questions: [...state.questions, question],
    })),

  updateQuestion: (question) =>
    set((state) => ({
      questions: state.questions.map((q) =>
        q.id === question.id ? question : q
      ),
    })),

  deleteQuestion: (id) =>
    set((state) => ({
      questions: state.questions.filter((q) => q.id !== id),
    })),

  setCurrentQuestion: (question) =>
    set({ currentQuestion: question }),

  getQuestion: (id) =>
    get().questions.find((q) => q.id === id),
}))
