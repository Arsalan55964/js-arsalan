// value truthy ya falsethy ka concept smjha hy cahi or code sy

const userEmail = []


if (userEmail) {
    console.log("got the user email");
    
} else {
    console.log("dont  have the user email");
    
}

// falsy values

//false VALUES, 0 , -0 , BigInt 0n , "", null , undefined, NaN

// TRUETHY VALUSE

// true valuse "0", 'false' ,  " " ,[] , {}, function() {}

// if (userEmail.length === 0) {
//     console.log("ARRAY IS EMPTY");
    
    
// }
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty");
    
    
}

// Nulish Coalesins Operator (??): null undefined

let val1;
//val1 = 5 ?? 10

//val1 =  null ?? 10

//val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Opreator

// conditon ? true : false  

const iceTeaPrice = 100
iceTeaPrice <=  80 ?  console.log("less than 80") : console.log("more than 80");


