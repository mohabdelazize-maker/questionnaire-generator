import { useState } from 'react'
import QuestionEditor from './components/QuestionEditor'
import PreviewPanel from './components/PreviewPanel'
import { Question } from './types/question'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])

  const handleSaveQuestion = (question: Question) => {
    if (currentQuestion?.id === question.id) {
      setQuestions(questions.map(q => q.id === question.id ? question : q))
    } else {
      setQuestions([...questions, question])
    }
    setCurrentQuestion(question)
  }

  const handleNewQuestion = () => {
    setCurrentQuestion(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">🎓 مولد أسئلة القدرات والتحصيلي</h1>
          <p className="text-gray-600 mt-1">أداة احترافية لإنشاء الأسئلة والاختبارات</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Section */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b border-gray-200 p-4">
              <h2 className="text-xl font-semibold text-gray-900">محرر السؤال</h2>
            </div>
            <QuestionEditor 
              onSave={handleSaveQuestion}
              initialQuestion={currentQuestion}
            />
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b border-gray-200 p-4">
              <h2 className="text-xl font-semibold text-gray-900">معاينة السؤال</h2>
            </div>
            {currentQuestion ? (
              <PreviewPanel question={currentQuestion} />
            ) : (
              <div className="p-8 text-center text-gray-500">
                <p className="text-lg">ابدأ بإنشاء سؤال جديد</p>
              </div>
            )}
          </div>
        </div>

        {/* Questions List */}
        {questions.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm">
            <div className="border-b border-gray-200 p-4">
              <h2 className="text-xl font-semibold text-gray-900">الأسئلة المحفوظة ({questions.length})</h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {questions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestion(q)}
                    className="p-4 text-right border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
                  >
                    <p className="font-semibold text-gray-900">السؤال {idx + 1}</p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{q.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
