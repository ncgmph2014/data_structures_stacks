/* Stacks! */

//methods: push, pop, peek, length
//notes: never used peek
//can use array stacks and class stacks
//creating a palidrome. if you think about it, you've already done this shit

//Palidrome using an array
//if you uncomment the array comment back Stack class

let letters = []; // this is our stack
let word = "racecar";
word = "freeCodeCamp";

let revword = ""; //reverse word

// put letters of word into stack

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// console.log(letters);

for (let i = 0; i < word.length; i++) {
  revword += letters.pop();
}

// console.log(revword);

if (word === revword) {
  console.log(word + " is a palindrome");
} else if (word !== revword) {
  console.log(word + " is not a palindrome");
}
