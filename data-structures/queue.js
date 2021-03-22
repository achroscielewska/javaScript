//data type FIFO (First In, First Out)

class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(elem) {
    this.data.push(elem);
  }
  dequeue() {
    return this.data.shift();
  }
  viewAll() {
    return this.data.join(", ");
  }
  front() {
    return this.data[0];
  }
  queueLength() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length === 0 ? true : false;
  }
  reset() {
    this.data = [];
  }
}

const ticketsQueue = new Queue;
console.log(`new ticketsQueue queue - isEmpty: ${ticketsQueue.isEmpty()}`);

ticketsQueue.enqueue("ticket one");
ticketsQueue.enqueue("ticket two");
ticketsQueue.enqueue("ticket three");

console.log(`ticketsQueue - front: ${ticketsQueue.front()}`);
console.log(`ticketsQueue - queueLength: ${ticketsQueue.queueLength()}`);
console.log(`ticketsQueue - viewAll: ${ticketsQueue.viewAll()}`);

ticketsQueue.dequeue();
console.log(`ticketsQueue after dequeue - front: ${ticketsQueue.front()}`);

ticketsQueue.reset();
console.log(`ticketsQueue after dequeue - queueLength: ${ticketsQueue.queueLength()}`);