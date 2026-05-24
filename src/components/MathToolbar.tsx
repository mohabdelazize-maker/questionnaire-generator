const MathToolbar = () => {
  const mathSymbols = [
    { symbol: '∫', label: 'تكامل', latex: '\\int' },
    { symbol: '∑', label: 'مجموع', latex: '\\sum' },
    { symbol: '√', label: 'جذر تربيعي', latex: '\\sqrt{}' },
    { symbol: '³√', label: 'جذر تكعيبي', latex: '\\sqrt[3]{}' },
    { symbol: '÷', label: 'قسمة', latex: '\\div' },
    { symbol: '×', label: 'ضرب', latex: '\\times' },
    { symbol: '≤', label: 'أصغر من أو يساوي', latex: '\\le' },
    { symbol: '≥', label: 'أكبر من أو يساوي', latex: '\\ge' },
    { symbol: '≠', label: 'لا يساوي', latex: '\\ne' },
    { symbol: '∞', label: 'ما لا نهاية', latex: '\\infty' },
    { symbol: 'π', label: 'باي', latex: '\\pi' },
    { symbol: 'θ', label: 'ثيتا', latex: '\\theta' },
  ]

  const handleCopySymbol = (latex: string) => {
    // This will be integrated with the math editor
    console.log('Copy symbol:', latex)
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">🔧 أدوات الرياضيات</h3>
      <div className="flex flex-wrap gap-2">
        {mathSymbols.map((item) => (
          <button
            key={item.label}
            onClick={() => handleCopySymbol(item.latex)}
            title={item.label}
            className="px-3 py-2 bg-white border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-400 transition text-lg font-semibold"
          >
            {item.symbol}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MathToolbar
