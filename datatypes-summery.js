// primitive

//   7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

// console.log(id === anotherId);


// const bigNumber = 12344567899908292n




// refference  (Non primitive)

// array, objects, Functions

const heros = ["superhero", "badman","superman"];
let myObj = {
    name: "arsalan",
    age: 22,
}

const myFunction = function(){
   console.log("helloworld");
}

console.log(typeof scorevalue);


// ++++++++++++++++++++++++++++++++++++

//  stack (primitive),heap(non-primitive)

let myYoutubename = "arsalangamer"

let anothername =myYoutubename
anothername = "chaiurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "oarsalan17@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



