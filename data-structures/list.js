// List has implementation in javaScript - array
// below own implementation

class List {
  constructor() {
    this.listElements = [];
    this.listSize = 0;
    this.pos = 0;
  }
  append(element) {
    this.listElements[this.listSize++] = element;
  }
  find(element) {
    for (var i = 0; i < this.listElements.length; i++) {
      if (this.listElements[i] == element) {
        return i;
      }
    }
    return -1;
  }
  remove(element) {
    var elemPos = this.find(element);
    if (elemPos > -1) {
      this.listElements.splice(elemPos, 1);
      this.listSize--;
    }
  }
  length() {
    return this.listSize;
  }
  view() {
    return this.listElements;
  }
  insert(element, after) {
    var afterPos = this.find(after);
    if (afterPos > -1) {
      this.listElements.splice(afterPos + 1, 0, element);
      this.listSize++;
    }
  }
  contains(element) {
    var elemPos = this.find(element);
    if (elemPos > -1) {
      return true;
    } else {
      return false;
    }
  }
  moveTo(position) {
    this.pos = position;
  }
  getElem() {
    return this.listElements[this.pos];
  }
  previous() {
    return this.listElements[--this.pos];
  }
  next() {
    return this.listElements[this.pos++];
  }
  front() {
    this.pos = 0;
  }
  end() {
    this.pos = this.listSize - 1;
  }
}

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
