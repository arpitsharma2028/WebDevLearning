/*
For Each

array.forEach(some fun defination or name)
*/
let arr = [1, 2, 3, 4, 5];

function print(el) {
console. log(el);
}
arr.forEach(print);

// OR

arr. forEach(function(el) {
console. log(el);
});

let arr = [
    {
        name: "aman",
        marks: 95,
    },
    {
        name: "shradha",
        marks: 94.4,

    },
    {
        name: "rajat",
        marks: 92,

    }
];

arr.forEagh((student) => {
    console.log(student.marks);
});

/*
map function
*/
let num = [1, 2, 3, 4];

let double = num.map(function(el) {
return el*2;
}); 


/* filter function */

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even = nums.filter( (num) => (num %2 == 0) );

/*
Every : Returns true if every element of array gives true for some function. Else returns false 
*/

[1, 2, 3, 4].every( (el) => (el%2 == 0));
false

[2, 4].every( (el) => (el%2 == 0));
true


/* Some : Returns true if some elements of array give true for some function. Else returns false. */

[1, 2, 3, 4].some( (el) => (el%2 == 0));
false

/*Reduce :  */
let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result = nums. reduce( (max, el) => {
if(el > max) {
return el;
} else {
return max;

}
});


// to pass individual element array/string to some fun  ,  then pass funName(...arrayName); , Known as spread in array
console.log(...nums);
const data = {
email: "ironman@gmail.com",
password: "abcd",
};
const dataCopy = { ... data, id: 1237};


// making object literal from arrya , key : value , it automatically pick index as key  ,arr[idx] as value
let arr = [1, 2, 3, 4, 5]; //val
let obj1 = { ... arr }; //obj -> key:val
// output: {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}

/*
Rest: 
Allows a function to take an indefinite number of arguments and bundle them in an array
*/
function sum2( ... args){
return args. reduce((sum, el) => sum + el);
}

// Destructuring
// Storing values of array into multiple variables

let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup] = names;
console. log(winner, runnerup); //"tony" "bruce"

const student = {
name: "karan",
age: 14,
class: 9,
subjects: ["hindi", "english", "math", "science"],
username: "karan@123",
password: "abcd",
};
let { username: user, password: secret, city } = student;

// pick username key from student and store it in user named variable
console.log(user); // karan
console.log(username) // undefined ;