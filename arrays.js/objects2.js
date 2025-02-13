//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false







//console.log(tinderUser);

 const regularUser = {
   email: "some@gmail.com",
     fullname: {
         userfullname: {
            firstname: "arsalan",
            lastname: "umar"
         }
 
        }

 }

 //console.log(regularUser.fullname.userfullname.firstname);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj4 = {5: "a", 6: "b"}

 // const obj3 = {obj1,obj2} asay nhi kar na wrna object  ky ander object show hoga 
 //const obj3 = Object.assign({},obj1, obj2,obj4)

 const obj3 = {...obj1,...obj2,...obj4}
 //console.log(obj3);


 const users = [
    {
        id: 1,
        email: "h@gmail.com"


    },
    {
        id: 1,
        email: "h@gmail.com"


    },
    {
        id: 1,
        email: "h@gmail.com"


    }
 ]
 users[1].email
//  console.log(tinderUser);
 
 
//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('islogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor:Instructor} = course


console.log(Instructor);

const navbar = () => {

}



//  {  
//     "name":"hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
//  }

[
    {},
    {},
    {}
]

 