/*
Arrow function: they are not stand alone function , means can't use later , think like lembda function in cpp
cpp syntex :
auto isSafe =  [&](int x , int y){
            return (x >= 0 && y >= 0 && x < m && y < n);
        };

// they are nameless function
*/

// js syntex
const sum = (a,b) => {
    console.log(a+b);
}
// parenthesis are optional if arguement is  single

// if we have to just return value from arrow fun , no print , no other oepration , only return then
const mul = (a, b) => (
    a * b
);

// note , () not {} and statement terminator is also not there it is after ();
// more compact form
const mul = (a, b) => 
    a * b ;


// scope of 