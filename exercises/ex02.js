// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function removeBetween(stack, a, b) {
  const tempStack = new Stack();
  let [curIndex, aIndex, bIndex] = [stack.size(), -1, -1];
  while (!stack.isEmpty()) {
    const element = stack.pop();
    if (element === a) aIndex = curIndex;
    if (element === b) bIndex = curIndex;
    if (curIndex <= aIndex || curIndex >= bIndex) {
      tempStack.push(element);
    }
    curIndex--;
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween(fruits, "Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
