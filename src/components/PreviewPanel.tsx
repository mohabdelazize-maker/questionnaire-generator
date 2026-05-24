import { Question } from '../types/question'

interface PreviewPanelProps {
  question: Question
}

const PreviewPanel = ({ question }: PreviewPanelProps) => {
  const arabicChoiceMap: Record<string, 'أ' | 'ب' | 'ج' | 'د'> = {
    'a': 'أ',
    'b': 'ب',
    'c': 'ج',
    'd': 'د'
  }

  return (
    <div className="p-6 space-y-6">
      {/* Question Title */}
      <div className="text-lg text-gray-800 leading-relaxed">
        <p>{question.title}</p>
      </div>

      {/* Question Info */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-gray-600">مستوى الصعوبة</p>
          <p className="font-semibold text-gray-900">{question.difficulty}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-gray-600">الفئة</p>
          <p className="font-semibold text-gray-900">{question.category}</p>
        </div>
      </div>

      {/* Choices */}
      <div className="space-y-3">
        {question.choices.map((choice) => (
          <div
            key={choice.id}
            className={`p-4 border-2 rounded-lg transition ${
              choice.isCorrect
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 bg-gray-50 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-bold text-lg">{choice.label})</span>
              <span className="text-gray-900">{choice.text}</span>
              {choice.isCorrect && <span className="text-green-600 font-semibold">✓ الصحيحة</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PreviewPanel
