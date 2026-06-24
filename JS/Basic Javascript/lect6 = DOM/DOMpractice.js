/*
questions 1) create a H2 heading element with text - "Hello javascript". append "from Apna college studentz" to this text using JS
que2) create 3 divs woth common class name - "box". access them and some unique text to rach of them
*/
let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from apna college"
console.dir(h2);

let divi = document.querySelectorAll(".Classy");
console.log(divi);
/*
divi[0] // 1st div // to selecct individual element
divi[1] // 2nd div
divi[2] // 3rd div
divi[1]="hii"; // aasie nahi hoyega text change

divi[0].innerText = "hey";
divi[1].innerText = "hello";
divi[2].innerText = "Namaste";

easy method
*/
let idx = 0;
for(div of divi){
    div.innerText = `new unique value is ${idx}`;
    idx++;
}
// Qs- Create a new button elemeent. Give it s text "Click me!",background color of red and text color of white.
// insert the button as the first element inside body tag

// Qs2 create a <p> tag in html and give it a class and some styling.Now create a new class in CSS and try to 
// append this to the <p> element.
// Did you notice how you overwrite the class name when you add a new one?
// solve this problem using classList.

// Ans 1
butt = document.createElement("button");
butt.innerText="CLICK ME!";
bdy = document.querySelector("body");
bdy.prepend(butt);
butt.style.backgroundColor = "red";
butt.style.color = "white" ;

// Ans 2
let acce = document.querySelector("p");
acce.getAttribute("class");
// acce.setAttribute("class" , "newClass") // isne toh class ko hi replace kar dia lekin hume toh add krni h 
acce.classList.add("newClass");