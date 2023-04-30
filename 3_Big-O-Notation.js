// Big O
// Notation to classify how scalable a function or algorithm is, 
//and aloows us to estimate the worst case runtime of an algorithm
// based on the input size

// Constant time - Big 0 notation "0 (1)"
// Linear time - Big 0 notation "0 (n)" runtime proportional to the input
// Exponential runtime - Big 0 notation "0 (n^2)" not eficient
// Logarithmic runtime - Big 0 notation "0 (log n)" 

// Constant runtime - Big O Notation:  "O (1)"
function log(array) {
    console.log(array[0]);
    console.log(array[1]);
   }
    
   log([1, 2, 3, 4]);
   log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
    
   // Linear runtime - Big O Notation:  "O (n)"
   function logAll(array) {
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]); 
    }
   }
    
   logAll([1, 2, 3, 4, 5]);
   logAll([1, 2, 3, 4, 5, 6]);
   logAll([1, 2, 3, 4, 5, 6, 7]);
    
    
   // Exponential runtime - Big O Notation: "O (n^2)"
   function addAndLog(array) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        console.log(array[i] + array[j]);
      }
    } 
   }
    
   addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
   addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
   addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out
    
    
   // Logarithmic runtime - Big O Notation: O (log n)
   function binarySearch(array, key) {
       var low = 0;
       var high = array.length - 1;
       var mid;
       var element;
       
       while (low <= high) {
           mid = Math.floor((low + high) / 2, 10);
           element = array[mid];
           if (element < key) {
               low = mid + 1;
           } else if (element > key) {
               high = mid - 1;
           } else {
               return mid;
           }
       }
       return -1;
   }

   // Linked List have Big O of COnstant TIme - O ()

   // PRACTICAL USES OF LINKEDLISTS
   // ONLINE GAMING
   // POKER,M BOARD GAMES, DOMINOES

   // MEMORY MANAGEMENTSS BENEFITS
   