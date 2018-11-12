let LinkedList = require("./LinkedList.js");
let isEqual = require("lodash.isequal");
let list = new LinkedList();

list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToHead(0);

const arr = [0, 1, 2, 3, 4];
console.log(isEqual(arr, list.toArray()));

const arr2 = [0, 1, 2, 4];
list.removeFromList(3);
console.log(isEqual(arr2, list.toArray()));
