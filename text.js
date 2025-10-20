console.log("hello world")
   const text = "hello wolrd"
   const text2 = "hello world"
   console.log(text2);
   
   const text3 = new String("hy tea")
   console.log(text3);
   console.log(text3.length);
   console.log(text3[0]);
   console.log(text3.__proto__);
   console.log(text3.toUpperCase());
   console.log(text3.charAt(2));
   

   console.log(text3.indexOf("t"));
   console.log(text3.lastIndexOf("t"));
   const text4 = "hello world"
   console.log(text4.indexOf("l", 3));
   console.log(text4.lastIndexOf("l", 3));
   console.log(text4.indexOf("z")); // -1 if not found
   console.log(text4.includes("l"));   
   console.log(text4.includes("z"));   
   console.log(text4.startsWith("h")); 
   console.log(text4.endsWith("d"));
   console.log(text4.startsWith("l", 2));
   console.log(text4.endsWith("l", 3));
   console.log(text4.slice(0, 5));
   
    