const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = $kavg}`);
    }
}
// this refers to object that is executing current piece of code

/*

try & catch
The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

*/ 
try {
console. log(a);
} catch {
console. log("caught an error .. a is not defined");
}

try {
console. log(a);
} catch(err) {
console. log("caught an error .. a is not defined");
console.log(err);
}

/*
setTimeout(fun , delayTime) , this is a window function which will execute given function after given time as a paramenter , (in ms)
*/
console. log("Hi there!");

setTimeout(()=>{
console. log ("Apna College");
}, 4000);

console. log("Welcome to");
// it is usually used for API calls, request response etc.
// it execute parallel


/*
    it is like setTimeout fun , but it runs many times,
    when we want to stop this , we will call fun 
    clearInterval(ID)
    then its execution will stop.
*/

let id = setInterval(() => {
console. log("Apna College");
}, 2000);

console. log(id);

let id2 = setInterval(() => {
console. log("Hello World");
}, 3000);

console.log(id2);