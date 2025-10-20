
// function addTwoNumbers(number1,number2){

//     console.log(number1 + number2);
    
// }



function addTwoNumbers(number1,number2){

        //   let result = number1 + number2
        //   console.log("arsalan");
          
        //    return result
        return  number1 + number2
       
        
     }

     const result = addTwoNumbers(3, 5)

     //console.log("result:", result);

     function loginUserMessage(username = "sam"){
        if (username === undefined) {
            console.log("please enter a username");
            //return
            
            
        }
        return `${username} just logged in`

     }
     //console.log(loginUserMessage("arsalan"));
     //console.log(loginUserMessage("arsalan"));
     

     function calculatecartprice(val1 , val2, ...num1){
        return num1 
        
     }
     //console.log(calculatecartprice(200, 300 ,500, 2000));

     const user = {
        username: "arsalan",
        prices:199
     }

     function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
        
     }

    //handleObject(user)
     handleObject({
        username: "sam",
        price: 399

     })
     const myNewArray = [200, 400, 100, 600]

     function returnSecondvalue(getArray){
        
            return getArray[0]
          
          
     }

    console.log(returnSecondvalue(myNewArray));
    console.log(returnSecondvalue([200,400,100,600]))

    console.log(username);
     
   
     
                                         