import curry from 'ramda/src/curry'

const pluralize = (text, number) => {
  if (!text) return ''
  if (number == null) return text
  return number === 1 ? `${text}` : `${text}s`
}

export default curry(pluralize)
