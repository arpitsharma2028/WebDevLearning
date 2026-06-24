// how we can add elements using DOM

// appendChild( element )
// append( element )
// prepend( element ) -> Add everything at starting
// insertAdjacentElement( where, element)


// TRY EVERYTHING ON CONSOLE

let newP = document.createElement('p');
newP.innerText = "hey i am a new Paragraph created using createElement function ";

// i want to add something in my child -> i have to use append child

let body = document.querySelector('body');
body.appendChild(newP);
newP.append(" \n" , " this is added later"); //  although we can append other element too

/*

insertAdjacentElement(position, element)
  
position: A string representing the position relative to the targetElement ; must match (case-insensitively)
one of the following strings:

. 'beforebegin' : Before the targetElement itself.
. 'afterbegin' : Just inside the targetElement, before its first child.
. 'beforeend' : Just inside the targetElement, after its last child.
. 'afterend' : After the targetElement itself.

element : The element to be inserted into the tree.

let newBtn = document.createElement("button");
let targetPara = document.querySelector('p);

p.insertAdjacentElement(beforebegin,newBtn);

p.insertAdjacentElement(afterbegin,newBtn);

p.insertAdjacentElement(beforeend,newBtn);

p.insertAdjacentElement(afterebd,newBtn);
*/

// similarly we can remove child too
body.removeChild(newP);
// similar to append , remove function is also there
// newP.remove();

/*
Add the following elements to the container using only JavaScript and the DOM methods.
i) a <p> with red text that says "Hey I'm red!"
ii) an <h3> with blue text that says "I'm a blue h3!"
iii) a <div> with a black border and pink background color with the following elements inside of it:
    another <h1> that says "I'm in a div"
     <p> that says "ME TOO!"
*/
// i;
let p = document.createElement('p');
p.innerHTML = "I am red";
p.style.color = "red";
body = document.querySelector("body");
body.appendChild(p);
// iii;
let div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
div.innerText = "I am parent Div";
let body = document.querySelector("body");
body.appendChild(div);
let divChild = document.createElement("h1");
divChild.innerText = "I am in a DIV";
div.appendChild(divChild);