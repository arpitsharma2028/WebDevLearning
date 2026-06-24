console.log("hello bhai")
//operators
//arithematical operator
let a = 5;
let b = 3;
console.log("(a+b)/a*b");
console.log((a + b) / a * b);
console.log("modulus operator");
console.log(a % b); // when b is divided by a then output is remainder
console.log("exponentation operator");
console.log(a ** b); // 5^3
//console.log(" increment and decrement are called unary operator means they need 1 variable to operate")
console.log(a++); // pehle a ki value print kravi then +1 kr dia
console.log(++a); // ab a=6 then pehle +1 kia then print kia i.e 6+1=7
console.log(a); // a=7
console.log("pre decrement of a is ", --a); //pre decrement
console.log("post decrement of a is ", a--); // post decrement
console.log("a after using post and pre decrement", a);

// assignment operator
// == += -= *= %= **=
// a==b b ki value a ko assign ho jayegi not a ki value b ko
// a+= 1 means a = a+1
console.log("new a is a= a+3 ", a += 3);
console.log("a^2 is ", a **= 2); // a ki value a+3=8 ho gyi toh 8^2 = 64

// comparision operator : to compare two operator
// equal to == "as = is used as assignment operator "
// not equal to  !=  , equal to and  data type  ===  , not equal to and datatype !== 
console.log("5==2", 5 == 3); // it will give you a boolean value also we can write a==b;
console.log("25!=3", a != b); //  if a = 5 and b="5" then a==b is true bcoz js pehle string
// ko int mei convert krne ki koshish krega then comp krne ki koshish krega
// but agar string and number ko alag krna hai toh strict equal
// i.e ===  use krna pdega kyuki ye data type ko b check krega
// > , >= , < , <= can be used
console.log("4>3", 4 > 3);
// logical operator 
/* 
 logical AND    &&
 logical OR     ||
 logical not    !
*/
console.log("a is", a, "b is ", b);
let cond1 = a > b; // true
let cond2 = a === 64; // true
console.log("cond1 && cond2", cond1 && cond2);
console.log("3>4", !(3 > 4)); // logical not

// CONDITIONAL STATEMENT
let age = 17;

if (age > 18) {
    console.log("you can vote");
}

let mode = "dark"
let color;
if (mode === "dark") {
    color = "black"
    console.log(color);
}
else {
    console.log("color is not dark");
}
// to find a no. even or odd
let x = 1000
if (x % 2 == 0) {
    console.log(x, "is even no. ");
} else {
    console.log(x, "is odd no");
}
// else if statements
let DOB = 2008
console.log("DOB is", DOB);
if (DOB < 2007) {
    console.log("you can drive");
}
else if (DOB > 2007) {
    console.log("you cannot drive");
}
else {
    console.log("your DOB is 2007");
}

result = DOB < 2007 ? "adultt" : "not adult"; // compact if else
console.log(result);
// learn about switch statement
alert("alert give 1 time message");
prompt("1 time msg but can take input and we can store info using strings")
yourName = prompt("enter your name"); // temp treka to take input from user
console.log(yourName);