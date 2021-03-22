class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;

    this.append = function (element) {
   
      const node = new Node(element);

      if (this.head === null) {
        this.head = node;
      } else {
        var current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    };

    this.view = function () {
      var current = this.head;

      var string = "";
      while (current) {
        string += current.value + ", ";
        current = current.next;
      }
      if (string === "") {
        return "list is empty";
      } else {
        return string;
      }
    };
    this.insert = function (position, element) {
      if (position >= 0 && position <= this.size) {
        const node = new Node(element);
        const current = this.head;
        const index = 0;
        let previous;
        if (position === 0) {
          node.next = current;
          this.head = node;
        } else {
          while (index < position) {
            previous = current;
            current = current.next;
            index++;
          }
          node.next = current;
          previous.next = node;
        }
        this.size++;
        return true;
      } else {
        return false;
      }
    };
    this.viewAt = function (position) {
      if (position >= 0 && position <= this.size - 1) {
        let current = this.head;
        let index = 0;
        while (position > index) {
          current = current.next;
          index++;
        }
        return current;
      } else {
        return "no such position on list";
      }
    };

    this.removeAt = function (position) {
      if (position >= 0 && position <= this.size - 1) {
        let current = this.head;
        let index = 0;
        let previous;

        if (position === 0) {
          this.head = current.next;
        } else if (position === this.size - 1) {
    
          while (position > index) {
            previous = current;
            current = current.next;
            index++;
          }
          previous.next = null;
        } else {
          while (position > index) {
            previous = current;
            current = current.next;
            index++;
          }
          previous.next = current.next;
        }
        this.size--;
        return true;
      } else {
        return false;
      }
    };
  }
}


const train = new LinkedList;
console.log(`new train linkedList - view: ${train.view()}`);

train.append("wagon one");
console.log(train.view());
train.append("wagon two");
console.log(train.view());
train.append("wagon three");
console.log(train.view());
train.insert(0, "wagon TEST");
console.log(train.view());
console.log(train.viewAt(0).value);

console.log(train.size);
train.removeAt(3);
console.log(train.view());
console.log(train.size);