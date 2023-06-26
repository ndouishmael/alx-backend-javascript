export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

const result = concatArrays([1, 2, 3], [4, 5, 6], "Hello");
console.log(result); // [1, 2, 3, 4, 5, 6, 'H', 'e', 'l', 'l', 'o']
