function LinkedList () {
    this.head = null;
    this.tail = null;
  }
  
function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}
var LL = new LinkedList();
var userList = new LinkedList();


console.log(LL);
//LinkedList {head: null, tail: null}

var node1 = new Node(100, 'node2', null);
console.log(node1);
// Node {value: 100, next: "node2", prev: null}

// addToHead Function added by using prototype on the LinkedList constructor
LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;

    this.head = newNode;
}

var ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
console.log(ll);

// addToTail Function added by using prototype on the LinkedList constructor
LinkedList.prototype.addToTail = function (value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;
}

var myLL = new LinkedList();

myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);

console.log(myLL.tail.prev);
console.log(myLL.tail.prev.prev);

myLL.addToHead(100);

console.log(myLL);

console.log(myLL.tail.prev.prev.prev);


// removeHead Function added by using prototype on the LinkedList constructor
LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    return val;
}

var lll = new LinkedList();

lll.addToHead(1000);
lll.addToHead(2000);
lll.addToHead(3000);

lll.removeHead();
console.log(lll.removeHead())

// removeTail Function added by using prototype on the LinkedList constructor
LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
  
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;
  }
  
  var llt = new LinkedList();
  
  llt.addToHead('one');
  llt.addToHead('two');
  llt.addToHead('three');
  
  console.log(llt.removeTail());

  //  SEARCH METHOD
LinkedList.prototype.search = function (searchValue) {
    var currentNode = this.head;
    var counter = 0;
    while(currentNode) {
      if (currentNode.value === searchValue) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
}

console.log(myLL.search(70));
console.log(myLL.search('world'));
console.log(myLL.search(10));

//  INDEX OF METHOD
LinkedList.prototype.indexOf = function (value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;

  while(currentNode) {
    if (currentNode.value === value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
}

myLL.addToTail(1);
myLL.addToTail(5);
myLL.addToTail(3);
myLL.addToTail(5);
myLL.addToTail(8);
myLL.addToTail(7);
myLL.addToTail(5);

console.log(myLL.indexOf(5));