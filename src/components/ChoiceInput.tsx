import { Choice } from '../types/question'

interface ChoiceInputProps {
  choice: Choice
  onChange: (text: string) => void
  onSetCorrect: () => void
}

const ChoiceInput = ({ choice, onChange, onSetCorrect }: ChoiceInputProps) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        name="correct-answer"
        checked={choice.isCorrect}
        onChange={onSetCorrect}
        className="w-5 h-5 cursor-pointer"
      />
      <span className="font-bold text-lg text-gray-700 w-8">{choice.label})</span>
      <input
        type="text"
        value={choice.text}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={`إدخل الخيار ${choice.label}`}
      />
    </div>
  )
}

export default ChoiceInput
