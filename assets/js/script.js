// ToDo List Scripts
// Version 0.2

var taskArray = [{
    id : "001",
    status : "complete",
    content : "create and array",
    created : "2025/07/03 16:37",
    completed : "2025/07/03 16:45"
},
{
    id : "002",
    status : "complete",
    content : "create for each system that loads the array and displays the info in the display format",
    created : "2025/07/03 16:39",
    completed : "2025/07/03 16:46"
},
{
    id : "003",
    status : "complete",
    content : "create a way of updating the array when a new task is added",
    created : "2025/07/03 16:47",
    completed : "2025/07/03 17:11"
},
{
    id : "004",
    status : "incomplete",
    content : "create a write system for a file to store the array when a new task is added and call the file. This will need to create a new array listing, then update the file with the array and then reload the file to regenerate the tasks",
    created : "2025/07/03 16:47",
    completed : false
}];

//Wait for Document to load
document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    //Set a constant for the task button
    const taskButton = document.getElementById("newTaskButton");

    // add an event listener to see when the new Task Button has been clicked
    taskButton.addEventListener("click", () => {
        addTask()
        //DEBUG
        //console.log("newTaskButton");
    });

});

// FUNCTION to load tasks from array
function loadTasks(condition = "incomplete"){
   // define the element we are changing
    const taskBodyEl = document.getElementById("taskBody");
    taskBodyEl.innerHTML = "";
    for (i=0; i < taskArray.length; i++){
        
        //define variables for use in the for statement
        let taskStatus = taskArray[i].status;
        let taskContent = taskArray[i].content;
        let taskCreated = taskArray[i].created;
        let taskID = taskArray[i].id;
        if(condition != taskStatus && condition != false){continue;}

        // set a variable for the HTML that will be included
        let innerHTML = `
            <td>${taskStatus}</td>
            <td>${taskContent}</td>
            <td>${taskCreated}</td>
            <td><button class="complete-btn" onclick="completeTask(${taskID})">Mark as Complete</button></td>
        `;
        let newTaskEl = document.createElement("tr");
        newTaskEl.innerHTML = innerHTML;
        taskBodyEl.appendChild(newTaskEl);
    }

}

function completeTask(id){
    for (i=0; i<taskArray.length; i++){
        if (taskArray[i].id == id){
            taskArray[i].status = "complete";
        }
    }
    loadTasks();
}

// function to add a new task to the list
function addTask(){

    //set a variable that grabs the content from the new task input
    var taskContent = document.getElementById("newTaskInput").value;

    // Check if a task has been added to the box
    if (taskContent != ""){

        const taskBodyEl = document.getElementById("taskBody");

        // set a variable for todays date
        const today = new Date(); //set a new date object
        const yyyy = today.getFullYear(); // use the date object to get the year in full
        let mm = today.getMonth() + 1; // use the date object to get a the month. Months start at 0 so require a +1
        let dd = today.getDate(); // use the date object to get todays date;
        if (mm < 10) mm = '0' + mm // this adds a 0 to the front of the date if it is less than 10
        if (dd < 10) dd = '0' + dd; // this adds a 0 to the front of the month if it is less than 10
        var time = today.toLocaleTimeString('en-UK', { hour: 'numeric', hour24: true, minute: 'numeric' });
        const formattedDate = `${yyyy}/${mm}/${dd} ${time}`;

        addTaskArray = {
            id : "",
            status : "incomplete",
            content : taskContent,
            created : formattedDate,
            completed : false
        }
        taskArray.push(addTaskArray);

        loadTasks();
        document.getElementById("newTaskInput").value = "";
        taskContent.focus();

    }else{alert("Please type a task in the input box!");}
}