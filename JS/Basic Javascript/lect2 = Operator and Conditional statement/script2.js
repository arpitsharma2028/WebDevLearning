// practice sheet
/*  write a code which can give grades to students according  to their scores
80-100,A
70-89,B
60-69,C
50-59,D
0-49,E
*/
// let grade = 10;
// if(grade >= 90){
// console.log("A");
// }
// else if (grade> 100){
//     console.log("enter a valid value");
// }
// else if (grade<=89){
//     console.log("B");
// }
// else if (grade<=69){
//     console.log("C");
// }
// else if (grade<=59){
//     console.log("D");
// }
// else if (grade<=49){
//     console.log("E");
// }
// wrong
grade= prompt("Enter your marks");
// let grade = 1;
if(grade >= 90 && grade <=100){console.log("A");
}

else if (grade<=89 && grade >= 70 ){
    console.log("B");
}
else if (grade<=69 && grade >=60){
    console.log("C");
}
else if (grade<=59 && grade >= 50){
    console.log("D");
}
else if (grade<=49 && grade>= 0){
    console.log("E");
}

