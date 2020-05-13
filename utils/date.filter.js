export default (value, type) => {
  const date = new Date(value);
  switch (type) {
    case 'date':
      return date.toLocaleDateString();
    case 'time':
      return date.toLocaleTimeString();
    default:
      return date.toLocaleString();
  }
};
