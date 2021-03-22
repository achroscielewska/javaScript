// List has implementation in javaScript - array
// below own implementation

function List() {
  this.listElements = [];
  this.listSize = 0;
  this.pos = 0;
}
List.prototype.append = function (element) {
  this.listElements[this.listSize++] = element;
};

List.prototype.find = function (element) {
  for (var i = 0; i < this.listElements.length; i++) {
    if (this.listElements[i] == element) {
      return i;
    }
  }
  return -1;
};

List.prototype.remove = function (element) {
  var elemPos = this.find(element);
  if (elemPos > -1) {
    this.listElements.splice(elemPos, 1);
    this.listSize--;
  }
};

List.prototype.length = function () {
  return this.listSize;
};

List.prototype.view = function () {
  return this.listElements;
};

List.prototype.insert = function (element, after) {
  var afterPos = this.find(after);
  if (afterPos > -1) {
    this.listElements.splice(afterPos + 1, 0, element);
    this.listSize++;
  }
};

List.prototype.contains = function (element) {
  var elemPos = this.find(element);
  if (elemPos > -1) {
    return true;
  } else {
    return false;
  }
};

List.prototype.moveTo = function (position) {
  this.pos = position;
};

List.prototype.getElem = function () {
  return this.listElements[this.pos];
};

List.prototype.previous = function () {
  return this.listElements[--this.pos];
};

List.prototype.next = function () {
  return this.listElements[this.pos++];
};

List.prototype.front = function () {
  this.pos = 0;
};

List.prototype.end = function () {
  this.pos = this.listSize - 1;
};


const toDoList = new List;
console.log(`new toDoList list - view: ${toDoList.view()}`);

toDoList.append("to do 1");
console.log(`toDoList stack - view:`);
console.log(toDoList.view());

toDoList.append("to do 2");
toDoList.append("to do 3");
toDoList.append("to do 4");
toDoList.append("to do 5");
toDoList.append("to do 6");
console.log(`toDoList stack - length: ${toDoList.length()}`);

toDoList.remove("to do 5");
console.log(`toDoList stack after remove - view, length:`);
console.log(toDoList.view());
console.log(toDoList.length());

toDoList.insert("to do 17", "to do 4");
console.log(`toDoList stack after insert - view, length:`);
console.log(toDoList.view());
console.log(toDoList.length());

console.log(toDoList.contains("to do 17"));
console.log(toDoList.contains("to do 0"));

console.log(`show current position`);
console.log(toDoList.pos);

toDoList.moveTo(3);

console.log(`show position after move`);
console.log(toDoList.pos);

toDoList.next();

console.log(`show position after next`);
console.log(toDoList.pos);

toDoList.previous();

console.log(`show position after previous`);
console.log(toDoList.pos);
