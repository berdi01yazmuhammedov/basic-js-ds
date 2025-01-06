const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];  // Инициализируем массив для хранения элементов стека
  }

  push(element) {
    this.stack.push(element);  // Добавляем элемент в конец массива
  }

  pop() {
    return this.stack.pop();  // Удаляем и возвращаем последний элемент массива
  }

  peek() {
    return this.stack[this.stack.length - 1];  // Возвращаем последний элемент массива
  }
}

module.exports = {
  Stack
};
