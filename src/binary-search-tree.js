const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;  // Корень дерева
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);
    
    if (!this.treeRoot) {
      this.treeRoot = newNode;  // Если дерево пустое, новый узел становится корнем
    } else {
      this._addNode(this.treeRoot, newNode);  // Иначе добавляем узел в дерево
    }
  }

  // Вспомогательный метод для добавления узлов
  _addNode(currentNode, newNode) {
    if (newNode.data < currentNode.data) {
      // Если значение меньше текущего, идем влево
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this._addNode(currentNode.left, newNode);
      }
    } else {
      // Если значение больше или равно текущему, идем вправо
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this._addNode(currentNode.right, newNode);
      }
    }
  }

  has(data) {
    return this._hasNode(this.treeRoot, data);
  }

  // Вспомогательный метод для проверки наличия узла
  _hasNode(node, data) {
    if (!node) return false;
    
    if (data === node.data) {
      return true;
    }

    if (data < node.data) {
      return this._hasNode(node.left, data);  // Идем влево
    } else {
      return this._hasNode(node.right, data); // Идем вправо
    }
  }

  find(data) {
    return this._findNode(this.treeRoot, data);
  }

  // Вспомогательный метод для нахождения узла
  _findNode(node, data) {
    if (!node) return null;
    
    if (data === node.data) {
      return node;
    }

    if (data < node.data) {
      return this._findNode(node.left, data);  // Идем влево
    } else {
      return this._findNode(node.right, data); // Идем вправо
    }
  }

  remove(data) {
    this.treeRoot = this._removeNode(this.treeRoot, data);
  }

  // Вспомогательный метод для удаления узла
  _removeNode(node, data) {
    if (!node) return null;
    
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);  // Идем влево
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);  // Идем вправо
      return node;
    } else {
      // Узел с данным значением найден
      if (!node.left && !node.right) {
        return null;  // Узел без детей
      }

      if (!node.left) {
        return node.right;  // Узел с одним правым потомком
      }

      if (!node.right) {
        return node.left;  // Узел с одним левым потомком
      }

      // Узел с двумя детьми: находим минимальное значение в правом поддереве
      const minRightNode = this._findMinNode(node.right);
      node.data = minRightNode.data;
      node.right = this._removeNode(node.right, minRightNode.data);
      return node;
    }
  }

  // Вспомогательный метод для нахождения минимального узла
  _findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    const minNode = this._findMinNode(this.treeRoot);
    return minNode ? minNode.data : null;
  }

  max() {
    let node = this.treeRoot;
    while (node && node.right) {
      node = node.right;
    }
    return node ? node.data : null;
  }
}

module.exports = {
  BinarySearchTree
};