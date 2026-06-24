 //Change in state of an object is called Event
// Event are fired to modify code of interesting changes that may affect code execution
/*
mouse event(click,double click)
keyboard event (key press, key down key up)
form event (submit)
print event
*/
btn = document.querySelector("button");
btn.onclick =(evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log("btn was clicked");
    let a = 25;
    a++ ;  
    console.log(a); 
}
// Event object 
// it is a special object that has details about the event
// all event handlers have access to the event object's properties and methods
// node.event = (event) => {
    // handle here
 //    };

//Event Listener
// node.addEventListener(event,callback)
// node.removeEventListener(event,callback) // callabck is basically function lets do sa,e things from linr 9 to 17 using Event listener
btn.addEventListener("click",(xyz)=>{
    console.log("button was clicked again");
    console.log(xyz.type);
});
btn.addEventListener("click",()=>{
    console.log("handler 1");
});
btn.addEventListener("click",()=>{
    console.log("handler 2");
});
btn.addEventListener("click",()=>{
    console.log("handler 3");
});
btn.removeEventListener("click",()=>{
    console.log("handler 3");
});  // isse handler 3 jo add kia h uppar wale step mei vo nahi remove hoga coz ye system ke anderr alag alag memory occupy krke baithe hain
const B = ()=>{
    console.log("handler 4");
}
btn.addEventListener("click", B );  // handler 4 is added
 btn.removeEventListener("click", B ); // handler 4 is remover


// Create a toggle button that change the box to dark mode when clicked & light mode when clicked again.
let modeBtn = document.querySelector("#mode");
let currMode = "light";
modeBtn.addEventListener("click", ()=>{
console.log("you are trying to change mode");
if (currMode === "light") {
    currMode = "dark";
    document.querySelector("div").style.backgroundColor = "black" ;
} else {
    currMode = "light";
    document.querySelector("div").style.backgroundColor = "white" ;
}
console.log(currMode);
});
// alternate :

/*
modeBtn.addEventListener("click", ()=>{
console.log("you are trying to change mode");
if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light") ;
} else {
    currMode = "light";
    document.querySelector("body").classList.add("light") ;
    document.querySelector("body").classList.remove("dark");
}});
*/


// Course Content:-

/*
    // let a button is made in html file , i want when i click on that button , it sends alert
    function sayHello(){
        alert("Hello, How are you ? ");
    }
    let btns = document.queryselectorAll("button");
    for( btn of btns){
    btn.onclick = sayHello; // here () is not there , if we do then function call happens only 1 time;

    btn.onmouseenter = function (){
        alert("your arrow is on button ");
    }
    }
*/
/*
Events:
    // Mouse Events: 

    Onclick
    onmouseenter // hover
    ondblclick

    // Keyboard Events

    keydown : Fired when a key is pressed.
    keypress : Fired when a key that produces a character value is pressed down.
    keyu̱p : Fired when a key is released.

    // form events
    submit

    // more events
    change // track final and initial values
    input // track small changes

    change event : The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).
    input event : The innut event fires when the value of an <input> <select> or <textarea> element has heen changed.

    - mouseout
    - keypress
    - Scroll
    - load : Fires when the entire page finishes downloading, including images and stylesheets.
*/

// Event Listeners
/*
 let i want to execute multiple events when i click on button , button.onclick = fun1 , button.onclick = fun2
 => at final conclusion i have only 1 value assigned on button clicking event;
 // Element.addEventListener(event,callback); this came in picture;
    btn.addEventListener("click",()=>{
        console.log("handler 1");
    });
*/

// this in Event Listener
// When 'this' is used in a callback of event handler of something, it refers to that something.
btn.addEventListener("click",
    function () {
        console.dir(this.innerTextx);
    }); // this means btn;
/*
// using this we can remove redundency from our code
let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
console.dir(this.innerText);
this.style.backgroundColor = "blue";
}
btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
// otherwise we have to make seperate function for every click;
*/

// example of Event Listener in Keyboard
/*
    let inp = document.querySelector("input");

    inp.addEventListener("keydown", function (event) {
    console. log("Key : ",event.key);
    console. log("Code : " , event.code;
    console. log("key was pressed");
    });
*/

// Example of Event Listener on forms

/*
<!-- HTML part : 
    <form action="/action":
    <input placeholder="username" />
    <button>Register</button>
    </form>
-->
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
event.preventDefault(); // it prevent default actions like, when submit event occurs , it execute /action in HTML file
alert("form submitted");
});

*/

// HOW DO WE PROCESS DATA IN FORMS

/*
    HTML STATEMENTS
    <form action="/action">
        <input placeholder="username" type="text" id="user" />
        <input placeholder="password" type="password" id="pass" />
        <button>Register</button>
    </form>
*/

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
    event.preventDefault();

    let user = document. querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log (pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
    // let suppose we have high no of data in form , many input boxes then
    // we know every child is present in HTML colloction of parent
    // then we can use something like ,   user = form.elements[0].value;        let pass = this.elements[1].value;
    });