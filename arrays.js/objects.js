// singleton
// object.create

// object litrals

const mySym = Symbol("Key1")

const JsUser = {

   name: "arsalan",
   age: 18,
   "fullname" : "arsalanumar",
   mySym : "myKey1",
   location:  "karachi",
   email: "arsalan@gmail.com",
   isloggedIn: false,
   lastLoginDays: ["Monday", "Saturday"]

}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym])


JsUser.email = "arsalan@chatgpt.com"
//Object.freeze(JsUser)

JsUser.email = "arsalan@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


const alluser = () =>{
    for (const key in JsUser) {
        console.log(`${key} : ${JsUser[key]}`);
        
    }
    
}