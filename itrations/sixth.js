 const coding = ["js", "ruby", "python", "java", "cpp"]

 const value = coding.forEach( (item) => {
    console.log(item);
    return item
    

 } )
 console.log(value);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const newNums2 = myNums.filter (  (num) => {
     return num > 4
 })
 console.log(newNums);

 const newNums = []

 myNums.forEach( (num) => {
    if (num > 4) {
       newNums.push(num)
        
     }
})
 console.log(newNums2)



 
 