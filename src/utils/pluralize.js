import curry from 'ramda/src/curry';

const pluralize = (text, number) => {
  if (!text) return '';
  return number === 1 ? `${text}` : `${text}s`;
};

export default curry(pluralize);
