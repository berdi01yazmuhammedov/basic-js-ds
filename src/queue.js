const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;  // Указатель на первый элемент
    this.tail = null;  // Указатель на последний элемент
  }

  // Добавить элемент в очередь
  enqueue(value) {
    const newNode = new ListNode(value);
    
    if (!this.tail) {
      // Если очередь пустая, новый элемент становится и головой, и хвостом
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Добавляем новый элемент в конец очереди
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Удалить и вернуть первый элемент из очереди
  dequeue() {
    if (!this.head) {
      return null; // Очередь пуста, нечего удалять
    }
    
    const value = this.head.value;
    this.head = this.head.next; // Сдвигаем указатель на следующий элемент
    
    if (!this.head) {
      this.tail = null; // Если очередь пуста, сбрасываем хвост
    }

    return value;
  }

  // Возвращает связанный список, представляющий очередь
  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};
