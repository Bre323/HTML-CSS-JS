class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  // Adds node to the end of Linked List
  append(value) {
    const newNode = new Node(value);

    if(!this.headNode) {
      this.headNode = newNode;
    }
    else {
      let current = this.headNode;
      while(current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }

    this.length++;
  }

  // Adds node to the start of Linked List
  preppend(value) {
    const newNode = new Node(value);

    if(!this.headNode) {
      this.headNode = newNode;
    }
    else {
      let current = this.headNode;
      newNode.nextNode = current;
      this.headNode = newNode;
    }

    this.length++;
  }

  // Returns size of Linked List
  size() {
    return this.length;
  }

  // Returns the first Node
  head() {
    return this.headNode;
  }
  
  // Returns the last Node
  tail() {
    let current = this.headNode;
    while(current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // Returns the Node at the specified index
  at(index) {
    let current = this.headNode;
    if(index < 0 || index >= this.length) {
      return null;
    }

    for(let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    return current;
  }

  // Removes and returns the last Node of Linked List
  pop() {
    if(!this.headNode) {
      return null;
    }
    if(!this.headNode.nextNode) {
      const poppedNode = this.headNode;
      this.headNode = null;
      this.length--;
      return poppedNode;
    }

    let current = this.headNode;
    while(current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const poppedNode = current.nextNode;
    current.nextNode = null;
    this.length--;
    return poppedNode;
  }

  // Checks if the value is in the Linked List
  contains(value) {
    let current = this.headNode;
    while(current) {
      if(current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  // Search and return the index of the specified Node
  find(value) {
    let current = this.headNode;
    let index = 0;
    while(current) {
      if(current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  // Add Node to specified index of the Linked List
  insertAt(value, index) {
    const newNode = new Node(value);

    if(index < 0 || index > this.length) {
      console.error("Unable to insert at specified index");
    }
    if(index === 0) {
      this.preppend(value);
    }

    let current = this.headNode;
    for(let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.length++;
  }

  // Removes Node from the specified index of the Linked List
  removeAt(index) {
    if(index < 0 || index >= this.length) {
      console.error("Unable to remove at specified index");
    }
    if(index === 0) {
      this.headNode = this.headNode.nextNode;
      this.length--;
    }

    let current = this.headNode;
    for(let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    current.nextNode = current.nextNode.nextNode;
    this.length--;
  }

  // Returns a string showing the Linked List
  toString() {
    let current = this.headNode;
    let result = '';

    while(current) {
      result += `[ ${current.value} ] -> `;
      current = current.nextNode;
    }

    return result + 'null';
  }
}


const list = new LinkedList();


list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
/*
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(4));
*/
//console.log(list.length);
