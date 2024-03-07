//Randomize the order of an array
export const randomizeArray = <T>(array: T[]): T[] | null => {
  if (array.length === 0) {
    return null;
  }

  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};