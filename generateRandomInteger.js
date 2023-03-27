const randomInt = (min, max) =>
 Math.floor(Math.random() * (max - min + 1)) + min;


const randomNum = randomInt(1, 10);
console.log(randomNum); // Output: a random integer between 1 and 10
