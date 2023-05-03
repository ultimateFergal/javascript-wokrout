// have a very fast runtime
// data stored of a key asociated with a value


function HashTable(size) {
    this.buckets = Array(size); // empty array of whatever size we choose
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}


console.log('hello world'.charCodeAt(4)); // prints 111 unique number for space char

// HAS METHOD,  it will take in a string and hash it into a number that corresponds to one of the buckets in out hash table
HashTable.prototype.hash = function (key) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }

    var bucket = total % this.numBuckets; // to make the number correspond with one of the buckets in the hash table (array positions)
    return bucket;
}


// INSERT NODE METHOD
HashTable.prototype.insert = function(key, value) {
    var index = this.hash(key); // to konw what bucket our hash node is going
    if (!this.buckets[index]) { 
        this.buckets[index] = new HashNode(key, value);
    }
    else if (this.buckets[index].key === key) { // checking first node to change its value
        this.buckets[index].value = value; 
    } else {
        // getting the last node in our chain and then adding the new one
        var currentNode = this.buckets[index];
        while(currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next.value = value; // for updating the email(value)m checks the next hashnode so it also checks the last node
                return; // when updating stop next instructions to avoid attatching repeated node again
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
}

// GET NODE METHOD
HashTable.prototype.get = function(key) {
    var index = this.hash(key); // to know what bucket our hash node is going
    if (!this.buckets[index]) { 
        return null;
    } else {
        var currentNode = this.buckets[index];
        while(currentNode) {
            if (currentNode.key === key) {
                return currentNode.value; 
                
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

// RETRIEVE ALL METHOD
HashTable.prototype.retrieveAll = function() {
    let allNodes = [];
    for( let i = 0; i < this.numBuckets; i++) {
        let currentNode = this.buckets[i];
        while (currentNode) {
            allNodes.push(currentNode);
            currentNode = currentNode.next
        }
    }
    return allNodes;
}

var myHT = new HashTable(30);
console.log(myHT); // prints pbject with  array of empty values

console.log(myHT.hash('Becca')); // will print a number between 0 and 29 printed out because siZe = 30

console.log('testing insert method');

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com'); // generates a colision with dean, so it's inserted as second node in that bucket 
myHT.insert('Dean', 'deanmachine@yahoo.com'); // updating dean's gmail
myHT.insert('Megan', 'megansmith@gmail.com'); // updating megan's gmail
myHT.insert('Dane', 'dane1010@outlook.com'); // updating dane's gmail

console.log(myHT.buckets, 'testing insert method'); // testing insert method

console.log('testing get method'); // testing get method

console.log(myHT.get('Dean'));
console.log(myHT.get('Megan'));

console.log('testing retrieve all method'); // testing retrieve all method
console.log(myHT.retrieveAll());


// prod
// constant time insertion
// constant time lookup   O(1)

// practical uses
 // EMail provider storing addresses
 // users of an application
