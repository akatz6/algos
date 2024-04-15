class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(val) {
      const newNode = new Node(val);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
  
      this.size++;
    }
  
    printList() {
      let current = this.head;
      let result = [];
      while (current !== null) {
        result.push(current.val);
        current = current.next;
      }
      console.log(result.join(' -> '));
    }
  }
  
  module.exports = { LinkedList, Node };
  