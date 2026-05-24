import { Question, GeneratedQuestion } from '../types/question'

/**
 * توليد أسئلة محاكية من سؤال أساسي
 */
export const generateSimilarQuestions = (
  sourceQuestion: Question,
  count: number = 5
): GeneratedQuestion[] => {
  const generatedQuestions: GeneratedQuestion[] = []

  for (let i = 0; i < count; i++) {
    const generatedQuestion: GeneratedQuestion = {
      ...sourceQuestion,
      id: `generated-${sourceQuestion.id}-${i}`,
      title: `${sourceQuestion.title} (نسخة ${i + 1})`,
      choices: shuffleChoices(sourceQuestion.choices),
      sourceQuestionId: sourceQuestion.id,
      similarity: Math.random() * 0.3 + 0.7, // 70-100%
      updatedAt: new Date(),
    }
    generatedQuestions.push(generatedQuestion)
  }

  return generatedQuestions
}

/**
 * إعادة ترتيب الخيارات عشوائياً
 */
const shuffleChoices = (choices: any[]) => {
  const shuffled = [...choices]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * تنويع نص السؤال
 */
export const variateQuestionText = (text: string, index: number): string => {
  const variations = [
    `${text} (تطبيق)`,
    `${text} (معدل)`,
    `${text} (موسع)`,
    `${text} (تحديث)`,
    `${text} (نسخة)`,
  ]
  return variations[index % variations.length]
}
