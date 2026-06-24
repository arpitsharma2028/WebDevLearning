// function is a Block of code that perform a specific task, can be invoked whenever needed.
/*
Function Defination:-

function functionName(){
// do some work

}

Function Call:-
functionName();

*/
// lets create our 1st function
function newFun(){
    console.log("hehehe");
}
for(let i=0;i<11;i++){
    newFun();
}

// 2
function NewFun(hahaha,x=prompt ("Enter your Name")){  // here hahaha is parameter: fun defination
    console.log("you have typed ",x,hahaha);
}

NewFun("abcdef"); // abcdef is arguement: fun call
// 3 
// function newfun(xyz){
//     console.log("hehehe",xyz);
// }
// newfun('abc');

// create a fun to calculate sum of two number

function cal(a= Number(prompt("Enter 1st no.")),b= Number(prompt("Enter 2nd no."))){
    console.log("sum of both number is : " , a+b);
}
// wrong ho gya tha lol
//You need to convert the input from strings to numbers
//using Number() or parseFloat().
// Number is case senstive.

function sum(x,y){
    // x,y are local variable i.e ye bas sum fun ke scope m rhega ; fun k bahar marr gye x,y
    s= x+y;
    return s;
    // yahan kuch bhi likho execute nahi hoeyga.
    // sum ki value wahan return hogyi jaahn use call kia gya tha
}
let val = sum(3,4);
console.log("sum of both no is ",val);
// Arrow sum : compact way of writing a fun; // part of modern JS
arrowSum= (a,b)=>{
   console.log(a+b);
   return a+b;
}
 // for each loop in array: ye ab array ke sath jud gya toh ye method bann gya
 /* arr.forEach(callBackFunction) 
 // CallBackFunction : Here it is a function to execute for each element in array
 // a callback fun passed as an arguement to another function
 arr.forEach(val){
 console,log(val)
 }
 */
let arr =[12,34,32,76];
function print(daew)
{
    console.log(daew);
};
arr.forEach(print); // for each array ke ek ek element ko uthayega and
// use value ki treh fun mei pass krega. forEach ise apne app execute kr dega
// higher order function: are functions which take another fun inside them as a parameter or return another fun as a output;

/*
Some More Array Methods
Create a new array with the result of some operation. the value its callback
returns are used to form new array.
map and foreach are similar but map will returns to new array.
arr.map(callbackFxn(value,index,array)) 
 
let newArr = arr.map ((val)=>{
    return val*2;
    })T
*/ 
/*
Filter array:
used to filter elements form array
*/
abc=[1,2,3,4,5,6,7];
let newabc= abc.filter((filtr)=>{
    return filtr%2==0;
})
console.log(newabc);

// reduce : perform some operation and return to single value;
const ABC= abc.reduce((d,e)=>{  //d= result, e = current and value return hokar result mei hi store hoyegi.
    // 1st element si basically result and next is current
    return d+e;
})
console.log(ABC); 

// code for finding largest no.
NUM=[132,234,543,242,54,5,353,423,5,353];
larNUM= NUM.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
});
console.log(larNUM);



// Lexical Function => function inside function
/*
 a variable defined outside a function can be accessible inside another function defined
after the variable declaration.

The opposite is NOT true.
 */
function outer(){
    let x =20;
    let y = 102;

    function inner(){
        console.log(x+y);
    }
    inner();
    function inner2(){
        console.log(z);
    }
    let z = 89;
    inner2() // posible due to hoisting
}

// Funcitons Expressions : basically another way to define function.
// these are not function name these are variable name but using variable name we can call fun
// sum(3,4) -> 7
// hello()
let sum = function(a, b) {
return a+b;
}

let hello = function() {
console. log("hello");
}

//