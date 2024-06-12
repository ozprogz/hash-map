const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node();
    node.value = value;

    if (this.isEmpty()) {
      this.setFirstNode(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(value) {
    const node = new Node();
    node.value = value;

    if (this.isEmpty()) {
      this.setFirstNode(node);
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  setFirstNode(node) {
    this.head = node;
    this.tail = node;
  }

  isEmpty() {
    if (this.head === null && this.tail === null) {
      return true;
    }
    return false;
  }

  getSize() {
    let size = 0;
    let current = this.head;
    while (current != null) {
      size++;
      current = current.next;
    }
    return size;
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    if (current !== null && index === 0) return current;
    let count = 1;

    while (current !== null && count <= index) {
      current = current.next;
      count++;
    }
    return current;
  }

  pop() {
    let current = this.head;
    if (current === null) throw Error("List is empty!");
    if (current.next === null) this.head = null;
    else {
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    while (current.next !== null) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  }

  contains(value) {
    let current = this.head;
    if (current === null) return false;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    if (current === null) return null;
    let index = 0;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    const size = this.getSize();
    if (index > size) {
      throw new Error("Index exceeds the size of the list.");
    }

    let node = new Node();
    node.value = value;

    let nextNode = this.at(index + 1);
    node.next = nextNode;
    if (index === 0) {
      this.head = node;
    } else {
      let previousNode = this.at(index - 1);
      previousNode.next = node;
    }
  }

  removeAt(index) {
    if (index >= this.getSize()) {
      throw new Error("Index exceeds the size of the list.");
    }

    let nextNode = this.at(index + 1);
    if (index === 0) {
      this.head = nextNode;
    } else {
      let previousNode = this.at(index - 1);
      previousNode.next = nextNode;
      if (nextNode === null) {
        this.tail = previousNode;
      }
    }
  }

  toString() {
    let toString = "";
    let current = this.head;
    while (current != null) {
      toString = toString + `( ${current.value} ) -> `;
      current = current.next;
    }
    return toString === "" ? "Empty List" : toString + `null`;
  }
}
