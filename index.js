// /* Stacks! */

// //methods: push, pop, peek, length
// //notes: never used peek
// //can use array stacks and class stacks
// //creating a palidrome. if you think about it, you've already done this shit

// //Palidrome using an array
// //if you uncomment the array comment back Stack class

// let letters = []; // this is our stack
// let word = "racecar";
// word = "freeCodeCamp";

// let revword = ""; //reverse word

// // put letters of word into stack

// for (let i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// // console.log(letters);

// for (let i = 0; i < word.length; i++) {
//   revword += letters.pop();
// }

// // console.log(revword);

// if (word === revword) {
//   console.log(word + " is a palindrome");
// } else if (word !== revword) {
//   console.log(word + " is not a palindrome");
// }

// Stacks as a class
//very convoluted but interesting
let Stack = function() {
  this.count = 0;
  this.storage = {};

  //Adds a value onto the end of a stack

  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function() {
    return this.count;
  };
  //Return the calue at the end of the stack

  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
