import { useState } from 'react'

const ImageUploader = () => {
  const [images, setImages] = useState<string[]>([])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            setImages([...images, event.target.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">الصور المرفقة</label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload" className="cursor-pointer">
          <p className="text-gray-600">📷 اسحب الصور أو انقر لتحميل</p>
        </label>
      </div>
      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative">
              <img src={img} alt="preview" className="w-full h-24 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageUploader
