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
    Onclick
    onmouseenter
    ondblclick
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

