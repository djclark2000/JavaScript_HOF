console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return function (plusNumber) {
    return plusNumber + number;
  };
}

let plus15 = plus(15);
console.log(plus15(10));

//With arrow notation: 
/*const plus = (number) => {
    return (plusNumber) => {
        return plusNumber + number;
  }
} */
//or:
//let plus = number => plusNumber => number + plusNumber;


// Exercise 2 Section
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

const names = users.forEach((element) => console.log(element.name));

console.log(names);


// Exercise 3 Section:
/* const namesAndScores = users.map((element) => {
  if (element.name && element.age) {
    delete element.age;
    delete element.isActive;
  }
  return element;
}); */

//or
const namesAndScores = users.map((user, index, array) => {
    return {
        name: user.name,
        score: user.score
    }
    //or:
    //const tempUser = {}
    //tempUser.name = user.name; 
    //tempUser.score = user.score; 
    //return tempUser
})

console.log(namesAndScores);



//Exercise 4 Section
/*const isActive = users.filter(element => {
    if (element.isActive == true){
        return true; 
    } 
    return false; 
}); 
console.log(isActive); */

//or
const isActive = users.filter((element) => element.isActive == true);
console.log(isActive);




// Exercise 5 Section
/*const sorted = users.sort((hobbit1, hobbit2) => hobbit2.score - hobbit1.score);

console.log(sorted); */

//or 

const sorted = users.sort((a, b) => {
    if (a.score > b.score) {
        return -1; 
    }
    if (a.score < b.score) {
        return 1; 
    }
    return 0; 
})





// Exercise 6 Section

const sumOfScores = users.reduce((ac, cv) => {
  return ac + cv.score; 
  
}, 0); 


console.log(sumOfScores/users.length); 

//another one
const testArray [2, 3, 4, 6, 7,]; 

const sum = users.reduce((ac, cv){
  return ac + cv.score; 
}, 0); 

console.log(sum)