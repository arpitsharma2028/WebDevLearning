let btn = document.querySelector("#btn1");
btn.addEventListener("click" , ()=>{

    let color = getRandomColor();
    div = document.querySelector("#div1");
    div.innerText = "Color :  "+color;
    div.style.backgroundColor = color;
});

function getRandomColor(){
    let R = Math.floor(Math.random()*255);
    let G = Math.floor(Math.random()*255);
    let B = Math.floor(Math.random()*255);

    let color = `rgb(${R}, ${G}, ${B})`;
    return color;
}