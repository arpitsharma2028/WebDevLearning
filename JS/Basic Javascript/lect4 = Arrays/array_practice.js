// for a given aray with marks of students -> [85,97,44,37,76,60] . find avg marks
let Marks = [85,97,44,37,76,60];
let sum = 0;
for (let val of Marks){
   
    sum = sum + val ;
    console.log("marks of subject is",val);
}
console.log("avg is", sum/Marks.length)

// Q2 for a given aray with prices of 5 items [250,645,300,900,50]
// apply items have an offer of 10% off on them. chnagae array to store final price after applying offer.

let items= [250,645,300,900,50];
let idxx =0;
for (price of items){
    idxx++ ;
    let offer = price/10 ;
    discounted_price = price-offer ;
    console.log(`real price of item is ${price} and after discount is given below`) ;
    console.log(`value after applying 10% off offer on ${idxx}th item is ${discounted_price}`);
    items=discounted_price;
  
    // console.log("final price of item", idxx ," is ", price*9/10); ~alternative
}
// another way
/*
for (let i=0;i<items.length,<i++){
let offer = item[i]/10;
item[i] -= offer
}
*/

/*
 Que Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix";
a. Remove tthe first company
b. Remove Uber & Add Ola in its place
c. add Amazon at end.
*/
comp= ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
comp.shift();
console.log("a",comp);
comp.splice(2,1,"Ola");
console.log("b",comp);
comp.push("Amazon");
console.log("c",comp);