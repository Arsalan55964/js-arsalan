function Setusername(username){
    // db calls
    this.username = username
    console.log("called");
    
}
function createUser(username,email,password){
    Setusername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);




function Setuseremail(useremail){
    this.useremail = useremail
    console.log("called")
    
}
function createUser1(username,useremail,password){
    Setuseremail.call(this,useremail)
    this.username = username
    this.password = password
}

const arslan = new createUser1("arslan",)
console.log(arslan);
    
