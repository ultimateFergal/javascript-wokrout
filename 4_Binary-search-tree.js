// Connection of nodes connected together in a certain way, 
// each node will contain two nodes, right node and left node holding data ass value

//RECURSION function calling itself with base case and recursive case
//will continue to call itself until de base case is satisfied

function factorial(num) {
    if (num === 1) {
        // base case
        return num;
    } else {
        //recursive case
        return num * factorial(num - 1)
    }
}

console.log(factorial(4));

// CONSTRUCTOR FUNCTION FOR BINARY SEARCH TREE
function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value) {
    if (value <= this.value) { // this.value from the root /current node
        if (!this.left) this.left = new BST(value)
        else this.left.insert(value)
    } else if (value > this.value) {
        if (!this.right) this.right = new BST(value)
        else this.right.insert(value)
    }
};

var bst = new BST(50);// created a binary search tree with one node and no child nodes

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst, 'binary search tree')
console.log(bst.right.left.left, '59')
console.log(bst.left.right.left, '35')
console.log(bst.right.right, '100')

// CONTAINS FUNCTION TO SEE IF THE BST HAS A NODE

BST.prototype.contains = function(value) {
    if (value === this.value) // this.value current node
        return true;
    else if (value < this.value) {
        if (!this.left) return false;
        else return this.left.contains(value);
    } else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value);
    }
}

console.log(bst.contains(50), 'returns true');
console.log(bst.contains(59), 'returns true');
console.log(bst.contains(10), 'returns true');
console.log(bst.contains(15), 'returns false');

