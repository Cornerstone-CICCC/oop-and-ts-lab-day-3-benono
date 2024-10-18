// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require("../lib/Stack");

function calcDistance(stack, a, b) {
  const tempStack = new Stack();
  let [curIndex, aIndex, bIndex] = [stack.size(), -1, -1];
  while (!stack.isEmpty()) {
    const element = stack.pop();
    if (element === a) aIndex = curIndex;
    if (element === b) bIndex = curIndex;
    curIndex--;
    tempStack.push(element);
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  return Math.abs(aIndex - bIndex);
}

const students = new Stack();
students.push("John");
students.push("Joe");
students.push("Jane");
students.push("Jill");
students.push("Jim");

const distance = calcDistance(students, "Joe", "Jim");
console.log(distance); // 3
const distance2 = calcDistance(students, "Joe", "Jill");
console.log(distance2); // 2
