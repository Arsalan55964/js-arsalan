const coding = ["js", "ruby", "python", "java", "cpp"]

coding.forEach(  function (val) {
  console.log(val);
  
} )

coding.forEach( (item ) => {
    console.log(item);
    

} )

function printMe (item) {
    console.log(item);
    
}
coding.forEach(printMe)


coding.forEach((item, index ,arr) => {
    console.log(item, index ,arr);
    
})

const myCoing = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    },

]
myCoing.forEach( (item) => {
    console.log(item.languageName);
    
} ) 