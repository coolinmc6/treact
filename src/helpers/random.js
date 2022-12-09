
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  addToTail(value) {
    const newNode = { value };
    if (!this.head) this.head = newNode;
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
  }

  removeHead() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }

  removeTail() {
    if (!this.tail) return null;
    const value = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return value;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return value;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
}

class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(value) {
    this.nodes[value] = new LinkedList();
  }

  addEdge(node1, node2) {
    if (!this.nodes[node1] || !this.nodes[node2]) {
      throw new Error('Both nodes must be in the graph');
    }
    this.nodes[node1].addToTail(node2);
    this.nodes[node2].addToTail(node1);
  }

  removeEdge(node1, node2) {
    if (!this.nodes[node1] || !this.nodes[node2]) {
      throw new Error('Both nodes must be in the graph');
    }
    this.nodes[node1].removeHead(node2);
    this.nodes[node2].removeHead(node1);
  }

  removeNode(value) {
    if (!this.nodes[value]) {
      throw new Error('Node must be in the graph');
    }
    while (this.nodes[value].head) {
      const adjacentNode = this.nodes[value].removeHead();
      this.removeEdge(value, adjacentNode);
    }
    delete this.nodes[value];
  }

  depthFirstTraversal(startingNode, callback) {
    const visited = {};
    const traverse = (node) => {
      if (!node) return;
      visited[node] = true;
      callback(node);
      let currentNode = this.nodes[node].head;
      while (currentNode) {
        if (!visited[currentNode.value]) {
          traverse(currentNode.value);
        }
        currentNode = currentNode.next;
      }
    };
    traverse(startingNode);
  }

  breadthFirstTraversal(startingNode, callback) {
    const visited = {};
    const queue = [startingNode];
    while (queue.length) {
      const node = queue.shift();
      if (!visited[node]) {
        visited[node] = true;
        callback(node);
        let currentNode = this.nodes[node].head;
        while (currentNode) {
          if (!visited[currentNode.value]) {
            queue.push(currentNode.value);
          }
          currentNode = currentNode.next;
        }
      }
    }
  }
}

// simple debounce function
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}