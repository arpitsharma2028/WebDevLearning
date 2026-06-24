console.log("1st javascript");
alert("hello world");
// variables
// they are containers for data
age = 24
name = "tony"  //this is called string value 
//take care about spacing 
price = "1500"
// browser ke console mei toh age likhne ke baad output mei age ki value deta h lekin agar age hi print krvani ho toh then
console.log("age is");
console.log(age + 1);
x = null;
y = undefined;
console.log("value of x is");
console.log(x);
console.log("value of y is");
console.log(y); // x+y = NaN i.e not a numeric value.
isFollow = true; // ye value boolean type mei aa gyi
isFollow = false; // " = " operator is callled is called assignment operator
x=y // means y mei jo value hai use  x mei store kar do.

 /* 
 variable declaration rules
 * variable name are case senstive
 * only letters, dots,underscore and $ is allowed (not even spacing)
 * only a letter ,underscore,or $ should be 1st character.
 * reserved words cannot be variable name.
 */
/*
 there are some words reserved in js like console 
like console=13 is not valid as console keyword reserved by js but Console will not give error.
*/
/*
fullName            camelcase
full_name           snakecase
full-name           kababcase
FullName            pascalcase
*/
// use of var age and cosnt (but var is not used by good programmer)
var a = 4;
console.log(a);
var a = 6;
console.log(a);
var a = 0;
console.log(a); 
// last redecladed and updatted value of a is printed.
let B = 4;
console.log(B);
B = 7;
console.log(B);
B = 6;
console.log(B);
// variable redclare nahi hua bas update hua hai
const C = 32;
// const C = 43;  niche red line aa gyi kyuki const mei deredeclare and update nahi kar sakte
 let A; // variable initilization
 A=54; // variable declaration
 console.log(A);
 {
    let A=23;
    console.log(A)  // this is block scope means not valid outside braces and isi block ke ander 
    // A ko redefine nahi kar sakta lekin naya block banake kar sakta hun
 }
 {
    let A=5665;
    console.log(A);
 }
// datatypes in JS
let P = 43;
console.log(P)
//  typeof P ;   type this in console it will tell you type of datatype btw it is number data type
let Q = "your name" // this is string datatype;
isFOllow=true;
// boolean datatype
let R;
console.log(R); // koi value toh di nahi toh R = undefine hi ho gya 
let S=null;
// typeof R give you obejct because null itself is a object.
let t=BigInt("90283091830") // used to store big values
console.log(t); 
let u = Symbol("data type!") ; // symbol ka S capital hai
console.log(u);

/*
JavaScript mein Symbol ek naya data type hai.
Jab hum Symbol() use karte hain, to yeh unique value banata hai jo kabhi repeat nahi hoti.
Yeh object ke properties ko unique banane ke liye useful hai.

Primitive data types are basic types that store single values,
while non-primitive data types are more complex and can store collections of data.
*/

//non primitive datatype
// object literals
const student = {
   fullName : "arpit" ,
   age : 20 ,
   isPass : true,
   adress : "haryana",
};
// typeof student is an object means it is  collection of different variables.
// to access  rahul kumar is value and 20 is key and student is object , aaise hi obejct ke ander key ko acces krne ke 2 tereke hote hain
// ek toh obj.key or obj["key"];
console.log(student["age"]); // age string nahi hai ye variable hai
console.log(student.age);
student["age"] = student["age"] + 1 ; 
console.log(student.age);
// here you cannot change value of object but can change keys of objects
student.age += 1;
console.log(student.age);

// we know how to access values , now to add new value
student.gender = "famale";
// added successfully
//  student["gender"] = "male" ; 
student.marks = [1,2,3,4];
// to delete , delete object.key
delete student.marks ;

// nested object literals
const classInfo = {
   aman: {
      grade: "A+",
      city: "Delhi"
   },

   shradha: {
      grade: "A",
      city: "Pune"
   },
   karan: {
      grade: "0",
      city: "Mumbai"
   }
};

// also we can create array of these objects , and also can perform add , delete and other operations as we do with array