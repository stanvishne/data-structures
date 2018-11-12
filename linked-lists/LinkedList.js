function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.addToHead = function(value) {
  const newHead = {
    value,
    next: this.head ? this.head : null
  };
  this.head = newHead;
  this.length++;
};

LinkedList.prototype.toArray = function(arr = [], head = this.head) {
  if (!head) return arr;
  const newArr = [...arr, head.value];
  return head.next ? this.toArray(newArr, head.next) : newArr;
};

LinkedList.prototype.addToTail = function(value, head = this.head) {
  if (!head) {
    this.addToHead(value);
    return;
  }
  if (!head.next) {
    head.next = {
      value,
      next: null
    };
    this.length++;
  } else {
    this.addToTail(value, head.next);
  }
};

LinkedList.prototype.removeFromList = function(key) {
  if (this.head.value === key) {
    this.head = this.head.next;
    this.length--;
    return;
  }
  let current = this.head.next;
  let previous = this.head;

  while (current !== null) {
    if (current.value === key) {
      previous.next = current.next;
      this.length--;
      break;
    }

    previous = current;
    current = current.next;
  }
};

module.exports = LinkedList;
