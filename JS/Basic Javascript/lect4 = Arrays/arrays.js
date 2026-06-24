// jab hum related information ko store krvate hain toh hum use as a collection of items ki treh store  kravte hain
// and sare items ko ek hi naam dena chahte hain rather object mei subko alag alag naam dena pdta tha
// it is a linear way to store innformation.
// object ke ander key value pair hota hai rather array ke ander sirf value hoti ha na ki keys
// isme position matter krti hai na ki naam.
/*
Egs of arrays
let heroes = ["arpit","golu","vishal"] ;
let marks=[45,534,"arpit",false];
*/
let marks=[45,534,"arpit"];
console.log(marks);
console.log(marks.length);
// array khud koi type nahi hota ye object ka hi type hota hai.
console.log("type of marks",typeof marks);
// toh basically hum array ko object keh sakte hain jisme key value pair ke roop mei index ke sath pair nahi hota.
console.log(marks[0]);
console.log(marks[2]);
// to change value on array we can do it like this.
marks[2] = 33; // strings - immutable and arrays are mutable.
console.log(marks[2]);
// to print elements in Arrays  we can use loop
for (let idx=0 ; idx <marks.length; idx++){
    console.log(marks[idx]);
}

// for of 
for (let report of marks) {
    console.log("marks are: ",report);
}
let cities = ["kkr", "mumbai" ,"delhi"];
for (let city of cities){
    console.log("cities are",city);
}

// Array Method
    /*
    Push() : to add somthing at end;
    Pop()  : to delete something delete from end;
    toString() : convert array to string;
    concat()  : to join multiple array;
    unshift() : add to start;
    shift() : delete from start and return;
    slice() : returns to a piece of array; // didn't change original array; // slice mei ending index non exclusive hota h i.e ending index ko nahi lega
    splice() : change original array (add,remove,replace); //edit original array;
    */
fruits =["apple","banana","mango"];
// Push : add items and update array
fruits.push("guvava","PineApple");
console.log(fruits);
// pop()
// fruits.pop(); // item from end is deleted i.e PineApple is deleted
console.log("deleted item from fruits is",fruits.pop()); // here deleted
// toString () : to convert arry to string
fruit_basket = fruits.toString() ; // new string
alphabet = ["A","B","C"];
num=[1,2,3,4,5,6];
combination = alphabet + num ;
console.log(combination);
alphabet.concat(num);
joined_array = alphabet.concat(num,marks);
fruits.unshift("black_berry");
fruits.shift(); // now blackberry is deleted
console.log("slice array method is used here", fruits.slice(1,3));
// splice(starting index,no. of element to be delete after starting element described,just type no. elements)
console.log("splice array method is used here", fruits.splice(5,5,));
// lets add a few items in bw of fruits after banana.
fruits.splice(2,0,"Pomegrannet","jelly","dry fruits");


/* -----------OBJECT LITERALS-------------- */
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


let arr = {
    name : "arpit",
    roll_no : 21
};
// unlike array elements are not stored in order but only thing that matters is key value pair
consolse.log(arr);

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

// MATH object

// Methods
let n = 14;
Math.abs( n)

Math.pow( a, b)

Math.floor( n)

Math.ceil( n)

Math.random() // [0,1) values

// Properties
Math.PI;
Math.E;

// to generate random no bw 1 - 10
let random = Math. floor(Math.random() * 10) + 1;
// +1 because math.random donot give 1

// to generate random no be 21-24
Math.floor( Math.random() *5) +20;

// 21-25
 Math.floor( Math.random() *5 ) + 21;

