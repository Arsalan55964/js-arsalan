//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123jerry"
tinderUser.name = "tom"
tinderUser.isloggedIn = false







//console.log(tinderUser);

 const regularUser = {
   email: "umer@gmail.com",
     fullname: {
         userfullname: {
            firstname: "nassem",
            lastname: "shaheen"
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

 const courseArray = [
    {
        coursename: "js in hindi",
        price: "999",
        courseInstructor: "hitesh"
    },
    {
        coursename: "python in hindi",
        price: "799",
        courseInstructor: "hitesh"
    },
    {
        coursename: "c++ in hindi",
        price: "499",
        courseInstructor: "hitesh"
    }
 ]

//  console.log(courseArray[1].coursename);

//  const [course1, course2] = courseArray
//  console.log(course2.coursename);

 const [{coursename}, , {price}] = courseArray
 console.log(coursename, price);
//  console.log(course1);
//  console.log(course2);
