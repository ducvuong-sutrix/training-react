// default
function sayHi(name = 'world') {
  console.log(`Hello, ${name}`);
}

// rest
function rest(x, ...y) {
  return x * y.length;
}

rest(3, 'rest', 1, 0, 2); // 12

// spread
function spread(x, y, z) {
  console.log(x, y, z);
}

const args = [1, 0, 2];

spread(...args);
