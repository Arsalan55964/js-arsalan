const accountId = 144553
 let accountemail = "oarsalan17@gmail.com"
 var accountpassword = "12345"
 accountcity ="karachi"
 let accountstate;

//  accountid = 2// not allowed
accountemail ="hc@hc.com"
accountpassword = "2121211"
accountcity = "islamabad"

 console.log (accountId);
 console.table ([accountId,accountemail, accountpassword,accountcity,accountstate])

 /*
 prefer not use var 
 because of issue in block scope and functional scope

 */ 
console.log(typeof accountId);
console.log(typeof accountemail);
console.log(typeof accountpassword);
console.log(typeof accountcity);
console.log(typeof accountstate);
console.log(typeof "hello");

console.log(typeof 22);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof function(){});
console.log(typeof []);
console.log(typeof {});
console.log(typeof new Date());
console.log(typeof BigInt("1234567890123456789012345678901234567890"));
console.log(typeof 10n);
console.log(10n + 20n);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(10 / 0);
console.log(10 / -0); 
console.log(Number.NaN);
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));
console.log(isNaN(NaN));
console.log(isNaN("hello"));
console.log(Number.isNaN("hello"));
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

console.log(+"100");
console.log(+"hitesh");
console.log(Number("100"));
console.log(Number("hitesh"));
console.log(parseInt("100"));
console.log(parseInt("100.56"));  
console.log(parseFloat("100.56"));


  