    // LOOPS IN JS : whenwe have to repeat a piece of code again & again
// 1. for loop
// 2. while loop
// 3. Do while loop
// FOR LOOP:
for(let i=1;i<= 5;++i)//initilization, stopping condition, updation
    {
    console.log("new value of i is",i);
    alert("value of i is ",i);
}
// loop for making sum of 1 to n numbers
let sum=0;
for(let i=1;i<=100;i+=1){
   sum=i+sum ;
}
console.log("sum of 1 to 100 is",sum);
/*
yahan ab agar hum console.log(i) krenge toh error ayega kyuki
iss loop ke bahar i ko koi nahi janta lekin agar hum
let i=1 ki jagah var i=1 krenge toh ye bahhar bhi jinda rahega
lekin hum ye use nahi krte but yaad rakhne ki baat yehi hai ki
hum loop wale variable ko bahar use nahi krte.
*/
// if ending condition never false then loop is infinite

// WHile LOOP
let i=1;
while (i<6.9){
console.log(i);
i+=2;
}
// do while loop
// work similar to while loop but it wil check condition at end so it will have gurantee 
// that it will run at least 1 time
let j=12;
do{
    j=j+1; // j++ 
    // j+=1;
    console.log(j);
}while(j<12.1); // circular brackett ke baad ; hai
/* for-of loop 
when we want to operate loops on strings and arrays like
we want to loop on different lettter of any word like "arpit" 
*/
// For of loop and for in
// for-of loop syntex is for(let var of StrVar){
// do somework}
let str ="ARPIT";
let size =0;
for (let i of str){
    console.log("i=",i);
    size=size+1;
}
console.log("no of character in Arpit is",size);
// jitni baar loop run hua utne hi character hain Arpit mei.
// for in loop
let student = {
    name : "RAhul Kumar",
    age : 20,
    cgpa : 7.5,
    isPass : true,
}; // this is called object
for( let key in student){
    console.log("key",key);
}
// STRINGS
//it is a sequence of characters used to represent text
/*
Creating string let str="Apna College";
string lenth  str.length;
string indices  Str[0],str[1],str[2];
*/
str="Arpit_Sharma";
str.length;// type in compiler
console.log(str[0],str[1],str[7]); // A,r,h
// Template Literals
let sentence =`This is a template literals` ;
console.log(sentence);
console.log(typeof sentence);
// Why these tectecs are used?
// aagr hume kisiobject k items print krvane hote toh hum abhi tak kaise krvate the?
// like this
let obj = {
    item: "pen",
    cost:100 ,
};
console.log("the cost of",obj.item,"is",obj.cost);
let output = `the cost of ${obj.item} is ${5+5} rupees` ;// string interpolation is To create strings by doinng substitution of placeholder;
console.log(output);
let str3 ="Arpit\n\tSharma" ;
let str4 = "Arpit"
console.log(str3);
// \n is escape character : next line
// \t give you tab space
// escape character will give you 1 character length like \n is a single character
console.log("str3 length is", str3.length);
// String Method in JS ; they are built to manupulate a string
/*
str.toUpperCase()
str.toLowerCase()
str.trim() //remove whitespaces
str.slice(start,end?)// to return part of string and  start uss ke baad hoyega.
str1.concat(str2) // join str2 with str1
str.replace(searchVal,newVal)
str.charAt(idx),o
*/
// str4.toUppperCase() // type this in console // ye original string ki value ko change nahi kar raha hota
// ye nyi value return krega i.e agar hum str4.toUppperCase()  likhke console.log(str4) krenge
// toh ye Arpit print krega na ki ARPIT;
// str4="Arpit"
let NewString = str4.toUpperCase() ;
console.log(NewString); // to type ARPIT
// strings of JS are immmutable i.e original value of string cannot be change
string = "     ffj  jnd        ";
trimmedSTRING = string.trim(); // white sapces removed
console.log(trimmedSTRING);
let strm ="00112233445566778899"
console.log(strm.slice(4,8));
console.log(str4.slice(1,4));
console.log(str3.concat(str4));
console.log(str3+str4);
console.log(str3.replace("A" , "a")); // replacement ek bar hogi and 1st character kesath hogi
console.log(str3.replaceAll("A" , "a"));
console.log(str3.charAt("3"));