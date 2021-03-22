const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];

console.log(hege);
console.log(stale);
console.log("concat");
const children = hege.concat(stale);
console.log(children);

// The every() method checks if all elements in an array pass a test (provided as a function).
const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages);
console.log("every age>=18");
console.log(ages.every(checkAdult));

//The filter() method creates an array filled with all array elements that pass a test (provided as a function).

function checkAdult(age) {
  return age >= 18;
}

console.log(ages);
console.log("filter age>=18");
console.log(ages.filter(checkAdult));

// The find() method returns the value of the first element in an array that pass a test (provided as a function).

function findAdult(age) {
  return age >= 18;
}

console.log(ages);
console.log("find age>=18");
console.log(ages.find(findAdult));

function checkAdult(age) {
  return age === 40;
}

console.log(ages);
console.log("findIndex age===40");
console.log(ages.findIndex(checkAdult));

// The forEach() method calls a function once for each element in an array, in order.

let sum = 0;
function sumAll(age, index) {
  sum += age;
}

console.log(ages);
console.log("forEach");
ages.forEach(sumAll);

console.log(sum);

//The includes() method determines whether an array contains a specified element.
console.log(ages);
console.log("includes");
console.log(ages.includes(16));

//The indexOf() method searches the array for the specified item, and returns its position.
console.log(ages);
console.log("indexOf");
console.log(ages.indexOf(16));

console.log("Array.isArray()");
console.log(Array.isArray(ages));

//The join() method returns the array as a string.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let energy = fruits.join();

console.log(fruits);
console.log("join");
console.log(energy);
console.log("length");
console.log(fruits.length);

const numbers = [4, 9, 16, 25];
let x = numbers.map(Math.sqrt);

console.log(numbers);
console.log("map");
console.log(x);

//The pop() method removes the last element of an array, and returns that element.
numbers.pop();

console.log("numbers after pop");
console.log(numbers);

//The push() method adds new items to the end of an array, and returns the new length.
numbers.push(100);

console.log("numbers after push");
console.log(numbers);

//The unshift() method adds new items to the beginning of an array, and returns the new length.
numbers.unshift(0);

console.log("numbers after unshift");
console.log(numbers);

//The shift() method removes the first item of an array.
numbers.shift();

console.log("numbers after shift");
console.log(numbers);

let newNumbers = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log("numbers after reduce");
console.log(newNumbers);

console.log(fruits);
fruits.reverse();
console.log("fruits after reverse");
console.log(fruits);

//The slice() method returns the selected elements in an array, as a new array object.
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
//Note: The original array will not be changed.
let citrus = fruits.slice(1, 3);
console.log("fruits after slice(1, 3) as new array");
console.log(citrus);

//The splice() method adds/removes items to/from an array, and returns the removed item(s).
//Note: This method changes the original array.

fruits.splice(2, 0, "Lemon", "Kiwi");

console.log("fruits after splice()");
console.log(fruits);

function checkAdult(age) {
  return age >= 18;
}
console.log("some");
console.log(ages.some(checkAdult));

console.log("sort");
fruits.sort();

const points = [40, 100, 1, 5, 25, 10];

console.log("sort points");
console.log(points.sort(function(a, b){return a-b}));