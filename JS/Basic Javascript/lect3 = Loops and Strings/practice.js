// to print all even no. from 0 to 100
/*
for (i=0;i<=100;i+=2){
    console.log(i);
}
//alternate


for(j=0;j<101;j++){
    if (j%2==1) {console.log(j);}
    else if(j%2==0){console.log(j);} // agar hum (j%2===0;{console.log} laga den toh ye condition ko implement nahi krega
} 
*/

// create a game whwere you start with any random game no.. ask the user to keep'
// guessing the game no. untill the user enters correct value
// practice 2
/*
let gameNum = "25";
let userNum = prompt("Guess the game no. : ");
// console.log(userNum);
while(userNum!==gameNum){
    prompt("you enter wrong no. , Please ReEnter");
}
console.log("correct no. is",gameNum); 
*/

// practice questions of Strings
//Q1) Prompt the user to enter their full name. Generate a user name for  them
//based on output. Start username with @,followed by their full name and ending with the full length
username = prompt("Enter your name for creating your UserName");
console.log(username.toUpperCase()+"@"+username.length);