// ToDo List Scripts
// Version 0.2

var taskArray = [{
    status : "complete",
    content : "create and array",
    created : "2025/07/03 16:37",
    completed : "2025/07/03 16:45"
},
{
    status : "complete",
    content : "create for each system that loads the array and displays the info in the display format",
    created : "2025/07/03 16:39",
    completed : "2025/07/03 16:46"
},
{
    status : "incomplete",
    content : "create a way of updating the array when a new task is added",
    created : "2025/07/03 16:47",
    completed : false
},
{
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

function loadTasks(){

    for (i=0; i < taskArray.length; i++){
        // define the element we are changing
        const taskBodyEl = document.getElementById("taskBody");
        //define variables for use in the for statement
        let taskStatus = taskArray[i].status;
        let taskContent = taskArray[i].content;
        let taskCreated = taskArray[i].created;
        // set a variable for the HTML that will be included
        let innerHTML = `
            <td>${taskStatus}</td>
            <td>${taskContent}</td>
            <td>${taskCreated}</td>
            <td><button class="complete-btn">Mark as Complete</button></td>
        `;
        let newTaskEl = document.createElement("tr");
        newTaskEl.innerHTML = innerHTML;
        taskBodyEl.appendChild(newTaskEl);
    }

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
        const formattedDate = `${yyyy}/${mm}/${dd}`;

        // set a variable for the HTML that will be included
        let innerHTML = `
            <td>Incomplete</td>
            <td>${taskContent}</td>
            <td>${formattedDate}</td>
            <td><button class="complete-btn">Mark as Complete</button></td>
        `;
        let newTaskEl = document.createElement("tr");
        newTaskEl.innerHTML = innerHTML;
        taskBodyEl.appendChild(newTaskEl);


    }else{alert("Please type a task in the input box!");}
}