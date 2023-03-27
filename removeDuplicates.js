/* First Way */
const removeDuplicates = arr => [...new Set(arr)];

const numbers = [11, 50, 12, 19, 4, 8, 12, 50];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 5, 2, 9, 4, 8]



/* Second way 
function removeDuplicatesInArray(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicatesInArray(numbers))
*/