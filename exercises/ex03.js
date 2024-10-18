// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function insertAfterTarget(stack, target, newElement) {
  const tempStack = new Stack();
  while (!stack.isEmpty()) {
    const element = stack.pop();
    if (element === target) tempStack.push(newElement);
    tempStack.push(element);
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget(stack, "B", "X");
console.log(stack.printStack()); // A B X C D
