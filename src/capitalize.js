const capitalize = (word) => {
  const temp = word.charAt(0).toUpperCase() + word.substring(1);
  return temp;
};

export default capitalize;
