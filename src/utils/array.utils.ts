function getAdjacentElements(array: any[], index: number) {
  const length = array.length;
  if (length === 0) {
      return [undefined, undefined];
  }
  
  let prevIndex = index - 1;
  let nextIndex = index + 1;
  
  if (index === 0) {
      prevIndex = length - 1; // second to last element
  } else if (index === length - 1) {
      nextIndex = 0; // second element
  }
  
  return [array[prevIndex], array[nextIndex]];
}

export { getAdjacentElements };