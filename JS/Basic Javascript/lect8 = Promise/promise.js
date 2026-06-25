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

let request = saveToDB();
request.then(() =>{
        console.log("Work after full filled of promise ");
        msg = document.querySelector("#message");
        msg.innerText = "Promise FulFilled !";
    })
    .catch(
        ()=>{
            console.log("Work done after Rejection state of Promise");
            msg = document.querySelector("#message");
            msg.innerText = "Promise Rejected !";
        }
    )

saveToDB("apna college")
    .then(() => {
        console.log("data1 saved. promise was resolved. ");
        saveToDB("helloworld").then(() => {
            console.log("data2 saved");
        })
    })
    .catch(() => {
        console.log("promise was rejected");
    });

// improved Version

saveToDBPromise("apnacollege")
    .then(() => {
        console.log("promise1 resolved");
        return saveToDBPromise("hello world");
    })
    .then(() => {
        console.log("promise2 resolved");
        return saveToDB("Save this Data 3 ");
    })
    .then(() => {
        console.log("Data 3 saved ");
    })
    .catch(() => {
        console.log("some promise rejected");
    })

// promises are rejected and resolved with some data (valid results or errors)

saveToDB("apna college")
.then((result) => {
        console.log("data1 saved,  Result :" , result);
        saveToDB("helloworld").then(() => {
            console.log("data2 saved , result : " ,result);
        })
    })
    .catch((error) => {
        console.log("promise was rejected , with error " , error);
    });
