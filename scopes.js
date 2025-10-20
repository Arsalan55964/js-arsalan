//var c = 300


let a = 300
if (true){
    let  a = 10
const b = 20

//console.log("inner:", a);


    
}



//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "arsalan"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

   // two()
    

}
 //one()


 console.log( (addone (5)));
 
 function addone(num){
    return num + 1
 }
 

 const addTwo = function(num){
    return num + 2
 }

 addTwo(5)


 const   addThree = (num) => {
    return num + 3
 }
    addThree(5)
console.log(addThree(5));
console.log(addTwo(5));
console.log(addone(5));
console.log("hello world");
console.log('Hello My name is ${name} and my repo count is ${repocount}');


const arsalan = {
    name: "arsalan",
    age: 18,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    greeting: function () {
        console.log("hello js user");
    }
}
console.log(arsalan.name);

console.log(arsalan.age);
console.log(arsalan.isLoggedIn);
console.log(arsalan.lastLoginDays);



const tinderUser = {
    name: "arsalan",
    id: "1234",
    isLogged: true,
    lastActive: "yesterday",
    email: "adl@hotmail.com",
    age: 18
}
console.log(tinderUser.name);
console.log(tinderUser.id);
console.log(tinderUser.isLogged);
console.log(tinderUser.lastActive);
console.log(tinderUser.email);
console.log(tinderUser.age);
