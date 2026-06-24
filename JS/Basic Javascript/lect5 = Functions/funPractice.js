// Q1 create a fun using the "function" keyword that takes a string as an argument & returns then no. of vowels in string
// for(i= "naknclsnckanncfaner";if(i=[a||e||i||o||u]) ;i++){
// }
let count = 0;
function countVowels(str) {
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

countVowels("arpit");
console.log(count);

// for finding n! value ;
let n=1;
for (let a=5;a>1;a--){
    n=n*a;  
}
console.log(n);

// Q-1 write a do while loop that keeps prompting the user for a number
// untill they enter a +ve no.
let b=0;
let a;
for (let a = prompt("enter a no");a<0;a+=0){
    prompt("Please write a +ve value");
    a= parseInt(a);
  b==a;
}
// Q- For a given array of numbers, print the square of each value using for each loop
let num = [12,42,45,43,54];


num.forEach(function sq(b) {
    let a = b ** 2;
    console.log(a)
});
// alt
num.forEach((num) => {
    console.log("square is", num * num);
});

//  WE are given array of marks of students.Filter out of the marks that scored 90+
// take a no. n as input from user. Create an array from 1 to n.
// use reduce method to calculate sum of all numbebrs in the array.
// use reduce method to calculate product of all no. in array.


mark = [45,45,48,89,98,86,93,96];
topper = mark.filter((top)=>{
    return top>=90;
});
console.log(topper);


// Ans 2
/*
let p=0;
n= prompt("enter a noumber n as input");
n = parseInt(n)
for(n;n>0;n--){
   p=p+n;
var Q = [p+n];
}
console.log(Q);
*/
let N = prompt("Enter a no.");
let arey = [];
for(let i=1;i<=N;i++){
    arey[i-1] = i ; // 1(0);=,2(1),3(2);

}
//console.log(arr);

let Summ = arey.reduce((Res,cur)=>{
    return Res + cur;
});
console.log("sum = ",Summ);

// 2.b
let q = prompt("give an as input");
Q = [];

for(let m = 1;m<=q;m++){
    Q[m-1]= m;
}
console.log("Q is ",Q);
let Z = Q.reduce((Pro,reslt)=>{
    return Pro*reslt;
}
); 
console.log("prodcut is" , Z);