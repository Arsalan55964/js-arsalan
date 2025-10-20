const name = "arsalan"
const repocount = 50

//console.log(name + repocount + "value");

console.log('Hello My name is ${name} and my repo count is $ {repocount}');

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(-8, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));                                                                                                                                              
console.log(gameName.split(''));        
console.log(gameName.split(' ', 2));

const newUrl = "https://hitesh.com/hitesh-choudhary"
console.log(newUrl.split('/')); 
console.log(newUrl.split('/', 3)); 

const newString2 = "hitesh"
console.log(newString2.repeat(3));
console.log(`${newString2} `.repeat(3));
console.log(newString2.concat("  hc"));              
console.log(newString2.concat("  ", "is", " ", "good"));

const password
  = "  hitesh  "
console.log(password.padStart(10));
console.log(password.padEnd(10));
console.log(password.padStart(10, '*').padEnd(15, '*'));
console.log(password.padEnd(10, '*').padStart(15, '*'));

const myString = "hitesh"
console.log(myString.charCodeAt(0));
console.log(String.fromCharCode(104, 105, 116, 101, 115, 104));

// template string
const myName = "hitesh"
const repoCount = 50
// "hello my name is hitesh and my repo count is 50"
const greeting = `hello my name is ${myName} and my repo count is ${repoCount}`
console.log(greeting);

const html = `
    <h1> this is heading </h1>
    <p> this is para </p>
    <a href = "${newUrl}"> this is link </a>
`
console.log(html);

document.body.innerHTML = html    
// backtick  alt 96 

