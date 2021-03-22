//data type LIFO (Last In First Out)

class Stack {
	constructor() {
		this.data = [];
	}
	add(element) {
		this.data.push(element);
	}
	remove() {
		return this.data.pop();
	}
	view() {
		return this.data[(this.data.length) - 1];
	}
	reset() {
		this.data = [];
	}
	size() {
		return this.data.length;
	}
	isPopulated() {
		return this.data.length != 0;
	}
}


const books = new Stack;
console.log(`new book stack - isPopulated: ${books.isPopulated()}`);

books.add("Book 1");
console.log(`book stack view after add: ${books.view()}`); 

books.remove()
console.log(`book stack view after remove: ${books.view()}`);

books.add("Book one");
books.add("Book two");
books.add("Book three");

console.log(`book stack view after add: ${books.view()}`); 
console.log(`book stack size: ${books.size()}`); 

books.reset();
console.log(`book stack view after reset: ${books.view()}`); 
console.log(`book stack size after reset: ${books.size()}`); 