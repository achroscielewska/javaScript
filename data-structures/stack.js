//data type LIFO (Last In First Out)

function Stack() {
	this.data = [];
}

Stack.prototype.add = function(element) {
	this.data.push(element);
}

Stack.prototype.remove = function() {
	return this.data.pop();
}

Stack.prototype.view = function() {
	return this.data[(this.data.length)-1];
}

Stack.prototype.reset = function() {
	this.data = [];
}

Stack.prototype.size = function() {
	return this.data.length;
}

Stack.prototype.isPopulated = function() {
	return this.data.length != 0;
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