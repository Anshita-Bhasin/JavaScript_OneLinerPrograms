const countOccurrences = (arr, val) => arr.filter(v => v === val).length;


const numbers = [11, 50, 2, 9, 4, 8, 2, 50];
const count = countOccurrences(numbers, 50);
console.log(count); // Output: 2
