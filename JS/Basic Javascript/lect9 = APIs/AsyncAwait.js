// Async Fn - byDefault returns a Promise;
async function greet(){
    let num = Math.floor(Math.random()*3 +1);
    if(num%2)
    throw("Random error 404 ");

    return "I returned a Promise";
} 

PromiseResult = document.querySelector("#PromiseResult");

greet()
.then(
    (result)=>{
        console.log("Promise was resolved with a result => , ",result);
        PromiseResult.innerText = "Promise was resolved with a result :  \n  " + result ;
    }
)
.catch(
    (err)=>{
        console.log("Promise Rejected ! , Error throwed , Error is ",err);
        PromiseResult.innerText = "Promise Rejected ! \n Error throwed ! \n Error is   \n  " + err ;
    }
)

// we can make arrow functions Async
hello = async () =>{};


// Revision of Promise fn
function saveToDB(data){
    return new Promise (
        (resolve , reject)=>{
            let internetSpeed = Math.floor(Math.random()*10+1);
            if(internetSpeed >4){
                resolve("Success ,Promise resolved "); // PromiseState : Fullfilled , PromiseResult : "Success ,Promise resolved "
            }else{
                reject("Failure , Promise Rejected "); // PromiseState : Rejected , PromiseResult : "Failure , Promise Rejected "
            }
        }
    )
}

result = document.querySelector("#result");
function getNum(){
    return new Promise(
        (solve , reject)=>{
            setTimeout(
                ()=>{
                    let num = Math.floor((Math.random()*10 + 1));
                    result.innerText = "Random numbers generated , and behaviour of await is studied " +num;
                    solve();
                }
            , 1500)
        }
    )
}
async function demo(){
await getNum(); // wait until object result is obtained , // otherwise browser will do its multithread operations and execute all functions simulaniously
await getNum();
await getNum();
await getNum();
}
demo();

// we can do something similar to previous color change functions
let colorChangeBox = document.querySelector("#colorChangeBox");
async function changeColor(color){
    colorChangeBox.style.backgroundColor = color;
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2500);
}
async function changeManyColor(){
    await changeColor("green");
    await changeColor("red");
    await changeColor("pink");
    await changeColor("black");
    await changeColor("yellow");
}
changeManyColor();

let btn = document.querySelector("#btn");
btn.addEventListener("click" , ()=>{
    changeManyColor();
});

// how to handle errors

async function DEMO (){
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(1000);
    let ErrTesting = document.querySelector("#ErrTesting");
    return new Promise(
        (success,reject)=>{
            let num = Math.floor(Math.random()*100);
            if(num%2 == 0){
                ErrTesting.innerText += "Promise fullfilled\n";
                success()
            }
            else {
                // ErrTesting.innerText += "\Promise Rejected\n";
                reject();
            }
        }
    );
}

async function DEMOfnCall(){ // if i normally call this after rejection , my other functions will not work => how to handle errors => try catch block;
    
    let ErrTesting = document.querySelector("#ErrTesting");
    const calls = [DEMO, DEMO, DEMO, DEMO];
    
    for (const runCall of calls) {
        try {
            await runCall(); // If this fails, it jumps to the catch block BELOW
        } catch (err) {
            // It prints the error, but the loop keeps spinning to the next item!
            ErrTesting.innerText += " A call failed, but continuing to next...\n";
        }
    }
}
DEMOfnCall();