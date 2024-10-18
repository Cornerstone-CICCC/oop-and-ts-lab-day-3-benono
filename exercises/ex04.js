// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

// function isPalindrome(queue) {
//   const halfIdx = Math.round(queue.size() / 2)
//   const tempQueue = []
//   let index = 0
//   while (!queue.isEmpty()) {
//     index++
//     if (
//       (halfIdx % 2 === 0 && index <= halfIdx) ||
//       (halfIdx % 2 !== 0 && index < halfIdx)
//     )
//       tempQueue.push(queue.dequeue())
//     else if (halfIdx % 2 !== 0 && index === halfIdx) queue.dequeue()
//     else {
//       if (tempQueue.pop() !== queue.dequeue()) return false
//     }
//   }
//   return true
// }

function isPalindrome(queue) {
  const halfSize = Math.floor(queue.size() / 2);
  const tempArray = [];
  for (let i = 0; i < halfSize; i++) {
    tempArray.push(queue.dequeue());
  }

  if (queue.size() % 2 !== 0) {
    queue.dequeue();
  }

  while (!queue.isEmpty()) {
    if (tempArray.pop() !== queue.dequeue()) {
      return false;
    }
  }
  return true;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true
