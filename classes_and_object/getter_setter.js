class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email); 

const chai = new User("arsalan" , "123")

console.log(chai.email);
console.log (chai.password);
console.log(chai);
console.log(chai.email);
console.log(chai.password);
console.log(chai.email);
console.log(chai.password);
 

const tinderUser = {
    name: "arsalan",
    id: 1,
    isLogged: true,
    lastActive: "today",
    email: "ar@email.com",
    age: 18
}
console.log(tinderUser.name);
console.log(tinderUser.id);
console.log(tinderUser.isLogged);
console.log(tinderUser.lastActive);
console.log(tinderUser.email);
console.log(tinderUser.age);
 