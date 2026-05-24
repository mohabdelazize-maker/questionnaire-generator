/**
 * تحويل الأرقام الإنجليزية إلى العربية
 */
export const convertToArabicNumbers = (str: string): string => {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return str.replace(/\d/g, (digit) => arabicNumbers[parseInt(digit)])
}

/**
 * تحويل الأرقام العربية إلى الإنجليزية
 */
export const convertToEnglishNumbers = (str: string): string => {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return str.replace(/[٠-٩]/g, (digit) => arabicNumbers.indexOf(digit).toString())
}

/**
 * صيغة الأرقام العربية
 */
export const formatArabicNumber = (num: number): string => {
  return convertToArabicNumbers(num.toString())
}
