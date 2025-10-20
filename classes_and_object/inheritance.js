class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()
 
console.log(chai instanceof User);           

const tinderUser = {
    name: "arsalan",
    id: 1,
    isLogged: true,
    lastActive: "today",
    email: "dd2Email.com",
    age: 18
}   
console.log(tinderUser.name);
console.log(tinderUser.id);     


console.log(tinderUser.isLogged);

console.log(tinderUser.lastActive); 