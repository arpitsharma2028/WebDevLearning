/*
-- Features

. list - to show all todos

· add - to add a todo

· delete - to delete a task

. quit - to exit the todo
*/ 
let ToDo = [];
while(1){
    let req = prompt("Enter your request : list , add , delete or quit");
    
    // Handle the case where the user clicks "Cancel" on the prompt (which returns null)
    if(req === null) {
        alert("EXIT SUCCESSFULLY");
        break;
    }

    req = req.trim();
    req = req.toLowerCase();
    if(req == "quit"){
        alert("EXIT SUCCESSFULLY");
        break;
    }
    else if(req == "add"){
        let task = prompt("Enter your task to add");
        
        // Handle cancel and empty task inputs
        if(task !== null && task.trim() !== "") {
            if(ToDo.indexOf(task) == -1){
                ToDo.push(task);
                alert(task + " Added successfully");
            } else {
                alert(task + " is already in the list");
            }
        }
    }
    else if (req == "delete") {
        let task = prompt("Enter your task to delete");

        if (task !== null) {
            let idx = ToDo.indexOf(task);
            if (idx != -1) {
                ToDo.splice(idx, 1);
                alert(task + " Deleted successfully");
            } else {
                alert("Task Not found");
            }
        }
    }
    else if(req == "list"){
        if(ToDo.length == 0)alert("No pending Task");
        else{
        alert("Your tasks are \n "+ToDo.join("\n"));
        }
    }
    else{
        alert("Invalid Query");
    }   
}