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
LinkedList.prototype.removeHead = function (value) {
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