function filterOdd(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}
function doubleNumbers(numbers) {
    return numbers.map(num => num * 2);
}
function calculateSum(numbers) {
    return numbers.reduce((accumulator, num) => accumulator + num, 0);
}
function findMax(numbers) {
    return numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
}
function processData(numbers, callback) {
    return callback(numbers);
}
const numbersArray = [10, 20, 13, 24, 45, 26, 37, 8, 19, 80];
const oddNumbers = processData(numbersArray, filterOdd);
console.log('Odd Numbers:', oddNumbers);
const doubledNumbers = processData(numbersArray, doubleNumbers);
console.log('Doubled Numbers:', doubledNumbers);
const sumOfNumbers = processData(numbersArray, calculateSum);
console.log('Sum of Numbers:', sumOfNumbers);
const maxNumber = processData(numbersArray, findMax);
console.log('Maximum Number:', maxNumber);