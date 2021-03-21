//data type FIFO (First In, First Out)

function Queue() {
  this.data = [];
}

Queue.prototype.enqueue = function (elem) {
  this.data.push(elem);
};

Queue.prototype.dequeue = function () {
  return this.data.shift();
};

Queue.prototype.viewAll = function () {
  return this.data.join(", ");
};

Queue.prototype.front = function () {
  return this.data[0];
};

Queue.prototype.queueLength = function () {
  return this.data.length;
};

Queue.prototype.isEmpty = function () {
  return this.data.length === 0 ? true : false;
};

Queue.prototype.reset = function() {
	this.data = [];
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