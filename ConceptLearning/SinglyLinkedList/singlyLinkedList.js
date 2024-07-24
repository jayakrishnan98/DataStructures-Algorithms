class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Appending new item in the list.
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Remove node by value.
  removeByValue(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;
    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current) {
      previous.next = current.next;
      this.size--;
    }
  }

  // Remove a node by index
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null; // Invalid index
    }

    let current = this.head;

    // If the head needs to be removed
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      // Remove the node
      previous.next = current.next;
    }

    this.size--;
    return current.value;
  }

  printList() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result);
  }
}

let a = new LinkedList();
a.append(3);
a.append(4);
a.append(5);
a.removeByValue(4);
a.removeAt(1);
a.printList();