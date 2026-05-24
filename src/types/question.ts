export interface Question {
  id: string
  title: string
  images: Image[]
  choices: Choice[]
  correctAnswer: 'a' | 'b' | 'c' | 'd'
  difficulty: 'سهل' | 'متوسط' | 'صعب'
  category: string
  createdAt: Date
  updatedAt: Date
}

export interface Choice {
  id: string
  label: 'أ' | 'ب' | 'ج' | 'د'
  text: string
  isCorrect: boolean
}

export interface Image {
  id: string
  url: string
  width: number
  height: number
  position: 'inline' | 'above' | 'below' | 'right' | 'left'
  alt: string
}

export interface GeneratedQuestion extends Question {
  similarity: number
  sourceQuestionId?: string
}
