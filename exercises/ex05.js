// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 4 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function mixQueue(queue) {
  const halfSize = Math.floor(queue.size() / 2);
  const firstHalf = new Queue();
  const secondHalf = new Queue();
  // Extract first half of the queue
  for (let i = 0; i < halfSize; i++) {
    firstHalf.enqueue(queue.dequeue());
  }
  while (!queue.isEmpty()) {
    secondHalf.enqueue(queue.dequeue());
  }
  // Interleave elements
  for (let i = 0; i < halfSize; i++) {
    queue.enqueue(firstHalf.dequeue());
    queue.enqueue(secondHalf.dequeue());
  }

  // Enqueue any remaining element if queue size was odd
  if (secondHalf.size() > 0) {
    queue.enqueue(secondHalf.dequeue());
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6
