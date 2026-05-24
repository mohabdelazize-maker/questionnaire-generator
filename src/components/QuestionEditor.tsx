import { useState, useEffect } from 'react'
import { Question, Choice } from '../types/question'
import MathToolbar from './MathToolbar'
import ImageUploader from './ImageUploader'
import ChoiceInput from './ChoiceInput'

interface QuestionEditorProps {
  onSave: (question: Question) => void
  initialQuestion?: Question | null
}

const QuestionEditor = ({ onSave, initialQuestion }: QuestionEditorProps) => {
  const [title, setTitle] = useState('')
  const [difficulty, setDifficulty] = useState<'سهل' | 'متوسط' | 'صعب'>('متوسط')
  const [category, setCategory] = useState('')
  const [choices, setChoices] = useState<Choice[]>([
    { id: '1', label: 'أ', text: '', isCorrect: true },
    { id: '2', label: 'ب', text: '', isCorrect: false },
    { id: '3', label: 'ج', text: '', isCorrect: false },
    { id: '4', label: 'د', text: '', isCorrect: false },
  ])

  useEffect(() => {
    if (initialQuestion) {
      setTitle(initialQuestion.title)
      setDifficulty(initialQuestion.difficulty)
      setCategory(initialQuestion.category)
      setChoices(initialQuestion.choices)
    }
  }, [initialQuestion])

  const handleSave = () => {
    if (!title.trim()) {
      alert('الرجاء إدخال السؤال')
      return
    }

    if (!choices.some(c => c.isCorrect)) {
      alert('الرجاء تحديد إجابة صحيحة')
      return
    }

    const question: Question = {
      id: initialQuestion?.id || Date.now().toString(),
      title,
      difficulty,
      category,
      choices,
      correctAnswer: (choices.find(c => c.isCorrect)?.label.toLowerCase() as 'a' | 'b' | 'c' | 'd') || 'a',
      images: initialQuestion?.images || [],
      createdAt: initialQuestion?.createdAt || new Date(),
      updatedAt: new Date(),
    }

    onSave(question)
  }

  const handleChoiceChange = (id: string, text: string) => {
    setChoices(choices.map(c => c.id === id ? { ...c, text } : c))
  }

  const handleSetCorrect = (id: string) => {
    setChoices(choices.map(c => ({ ...c, isCorrect: c.id === id })))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Math Toolbar */}
      <MathToolbar />

      {/* Question Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">نص السؤال</label>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          placeholder="أدخل نص السؤال هنا..."
        />
      </div>

      {/* Image Uploader */}
      <ImageUploader />

      {/* Difficulty and Category */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">مستوى الصعوبة</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as 'سهل' | 'متوسط' | 'صعب')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="سهل">سهل</option>
            <option value="متوسط">متوسط</option>
            <option value="صعب">صعب</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">الفئة</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="مثال: الجبر"
          />
        </div>
      </div>

      {/* Choices */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">الخيارات</label>
        <div className="space-y-3">
          {choices.map((choice) => (
            <ChoiceInput
              key={choice.id}
              choice={choice}
              onChange={(text) => handleChoiceChange(choice.id, text)}
              onSetCorrect={() => handleSetCorrect(choice.id)}
            />
          ))}
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        💾 حفظ السؤال
      </button>
    </div>
  )
}

export default QuestionEditor
