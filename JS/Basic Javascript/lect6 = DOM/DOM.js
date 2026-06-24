/*
document object model
window object: the window object represent an open window in a browser. it is broser's object (not javascript) & is automatically created by browser .
it is a global object with lot of properties and method
window ek object hai aur usme html ke sare elements are subobjects. window element by default kr deta hai.
matlab sare html code ko hum JS se access kar sakte hain.
*/

 window.console.dir(document.body); // all tags that can exist in body tags are here
 console.log(document.body); // body tag written in html file accesed 
 document.body.style.background="red"

 // jab hum script ko Body elements se pehle access kar lete hain tabh DOM element ascessible nahi hote
 // script ko body se pehle access krna means means using script in head tag. thats why script tag is just written after body tag
let P= document.getElementById("idName"); // ~getElementByClass is also available, return html collection and getElementByTagName
console.dir(P) // all info regarding heading
console.log(P);
// selecting by class :  document.getElementsByClassName("nameOfClass"); // element-s  about it
// jab vo id print krte hai jo exist nahi karti toh null print hota h and class ke case mei empty html collection hota h

// selecting by tag = document.getElementsbyTagName(H1);

// but Queryselector method is used : it return node list 
// tags simple, #id and .class but all in " "
let firstEl = document.querySelector("p"); // select elements from first p tag
let allEl = document.querySelectorAll("p"); // return collection of objects , (array and collection are different things in JS)
//DOM Manipulation
/*
1. Properties
tagName: return tag for element nodes.  eg console.log("use of tagName is ",idName.tagName); // output is P\p i.e idName p tag mei hai
innerText: return the text content of the element and its chldren  eg. console.log("use of tagName is ",idName.innerText);
innerHTML : returns the plain text or HTML contents in the element. eg. console.log("use of tagName is ",idName.innerHTML);
also idName.innerHTML="<i>this text will be italic and replaced with previous text</i>"
textContent: returns textual plain content even for hidden element.eg.  console.log("use of tagName is ",idName.textContent);

Using "textContent" will return the complete text content, including the hidden text.
However, using "innerText" will only return the visible text content, excluding the hidden text.
textcontent -> pick text from html file meanwhile innerText extract from what is visible on screen.

2.Attributes 
getAttribute(attr) // to get the attribute value.

setAttribute(attr,value) // to set the attr value.

3. style
node.style
eg: 

// let links = document.querySelectorAll(".box a");
// for (link of links)
// link. style. color = "purple";

// this style property works for inline style added not with .css file

4. insert Element
node.append(el) // add at the end of node
node.prepend(el) // adds at the starting of node
node.before(el) // adds before the node (outside)
node.after(el) // adds after the node (outside)

5. Delete Element
node.remove() // removes the node

6. classList methods
obj = document.querySelecter('p');
obj.classList

classList.add() to add new classes

classList.remove( ) to remove classes

classList.contains() to check if class exists

classList.toggle( ) to toggle between add & remove
*/ 

// 2. attribute
let div = document.querySelector("#div1");
console.log(div);
let id = div.getAttribute("id");
console.log(id);
let N = div.getAttribute("name");
console.log(N);

para = document.querySelector("p");
console.log(para.getAttribute("class"));

// para.setAttribute("class","NewClass") // to change CLass to new class

// 3.style
div.style.backgroundColor="yellow"; //similar to css but in Camel case and use props in ""
// 4. Inert ELement

// document.createElement('p')
// · appendChild( element )
// · append( element )
// · prepend( element )
// · insertAdjacent( where, element)

let NewBtn = document.createElement("button");
NewBtn.innerText = "button 12" ; // new button ready h but launch nahi hua
let NB = document.querySelector("div");
NB.append(NewBtn);// for inside 1st div and will be at last i.e jo div mei 1 likha h uske baad button add hoyega
//NB.prepend(NewBtn); // 1 se pehle hoyega
//NB.before(NewBtn); //div ke uppar hoyega
// NB.after(NewBtn); // div ke niche hoyega
// to delete that button we will use
//NB.remove(NewBtn);
