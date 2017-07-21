/**
 * Basic syntax
 */
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((number) => number % 2 === 0);

// =========================================================

var numbers = [1, 2, 3, 4, 5, 6, 7];
var evens = numbers.filter(function(num) {
  return num % 2 === 0;
});


/**
 * Advanced syntax
 */
const items = [{
  name: 'Nguyen Van A',
  age: 10
}, {
  name: 'Nguyen Van B',
  age: 11
}, {
  name: 'Nguyen Van C',
  age: 10
}];

const person = items.filter(({ age }) => age > 10);

