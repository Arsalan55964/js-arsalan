const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"hitesh",password:"123"})
        } else {
            reject('error: something went wrong')
        }

    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("the promise is either resolve or solve"))


const promiseFive =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:"javascript" , password:"112"})
        } else {
            reject('error: js went wrong')
        }
    }, 1000)
});
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

async function  consumepromoiseFive(){
    try{
        const response = await promiseFive
        console.log(response);

        
    } catch (error) {
        console.log(error);
        
    }
}
consumepromoiseFive()





fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error)=> console.log(error))



// promise.all
// yes this is also available, kuch reading aap b kro.





const promisethree = new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log('async task is complete');
        resolve()
        

    }, 1000)

})

promisethree.then(function(){
    console.log('promise is consumed');
    
})
    
