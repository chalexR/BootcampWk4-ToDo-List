// ToDo List Scripts
// Version 0.2

var taskArray = [{
    id : 1,
    status : "complete",
    content : "create an array to hold the tasks",
    created : "2025/07/03 16:37",
    completed : "2025/07/03 16:45"
},
{
    id : 2,
    status : "complete",
    content : "create for each system that loads the array and displays the info in the display format",
    created : "2025/07/03 16:39",
    completed : "2025/07/03 16:46"
},
{
    id : 3,
    status : "complete",
    content : "create a way of updating the array when a new task is added",
    created : "2025/07/03 16:47",
    completed : "2025/07/03 17:11"
},
{
    id : 4,
    status : "incomplete",
    content : "create a write system for a file to store the array when a new task is added and call the file. This will need to create a new array listing, then update the file with the array and then reload the file to regenerate the tasks",
    created : "2025/07/03 16:47",
    completed : false
},
{
    id : 5,
    status : "complete",
    content : "create a way for the script to check for duplicate tasks and alert the user",
    created : "2025/07/04 13:42",
    completed : "2025/07/04 14:33"
},
{
    id : 6,
    status : "incomplete",
    content : "create an edit task function.<br>I would like this to piggy back off of the existing addTask function. The way i imagine this working is setting a default edit variable to false on the addTask function.<br>then if the edit function is set to tru this would allow the duplication check to go uncalled and would also use the duplication check to get the id. The id would then be used to edit the task rather than create a new task<br>to begin with i need to find a way of adding a new state to the newTaskButton which allows the edit function to bed fed through",
    created : "2025/07/04 14:45",
    completed : false
}];

//Wait for Document to load
document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    //Set a constant for the task button
    const taskButton = document.getElementById("newTaskButton");

    // add an event listener to see when the new Task Button has been clicked
    taskButton.addEventListener("click", () => {
        let edit = false;
        // check if the button is in edit mode or not and set the edit variable to true if we are
        if(taskButton.classList.contains("task-edit")){edit = true}

        addTask(edit);
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
            <td><button class="complete-btn" onclick="completeTask(${taskID})">✅</button><button class="complete-btn" onclick="editTask(${taskID})">✍🏻</button></td>
        `;
        let newTaskEl = document.createElement("tr");
        newTaskEl.innerHTML = innerHTML;
        taskBodyEl.appendChild(newTaskEl);
    }

}

function editTask(id){
    //cycle through tasks in the Array
    for (i=0; i<taskArray.length; i++){
        //check to see if the current task ID equals the id we are trying to change
        if (taskArray[i].id == id){
            // set a variable for the taskInput
            var taskInputEl = document.getElementById("newTaskInput");
            var taskIdInputEl = document.getElementById("taskEditID");
            // set a variable for the taskButton
            const taskButton = document.getElementById("newTaskButton");
            // set the task Input to the value of the task content we're editting
            taskInputEl.value = taskArray[i].content;
            taskIdInputEl.value = id;
            // set a clas sin the button that can be checked in the event listener
            taskButton.classList.add('task-edit');
            taskButton.innerHTML = "Edit Task";
        }
    }
}

function completeTask(id){
    //cycle through tasks in the Array
    for (i=0; i<taskArray.length; i++){
        //check to see if the current task ID equals the id we are trying to change
        if (taskArray[i].id == id){
            //change the status to complete
            taskArray[i].status = "complete";
        }
    }
    //reload the task display
    loadTasks();
    //DEBUG
    //console.log(taskArray);
}

function highestID(){
    let max = 0;
    for (i=0; i<taskArray.length; i++){
        currentID = parseInt(taskArray[i].id);
        if (currentID > max){ max = currentID}
    }
    return max;
}

// function to add a new task to the list
function addTask(edit = false){

    //set a variable that grabs the content from the new task input
    var taskInputEl = document.getElementById("newTaskInput").value;


    // If the task input is blank then throw an error
    if (taskInputEl == ""){alert("Please type a task in the input box!");}else{

        // set a variable find an element of the taskArray that equals the taskInput
        const dupeCheck = taskArray.find((element) => element.content === taskInputEl);
        console.log(dupeCheck);
        // if the dupeCheck has found something and we are not in edit mode the send an alert
        if(dupeCheck != undefined && !edit) {alert("Duplicate Task!");}else{
            
            // set constant for the area of html we will be adding the new task to. 
            const taskBodyEl = document.getElementById("taskBody");

            // set a variable for todays date
            const today = new Date(); //set a new date object
            const yyyy = today.getFullYear(); // use the date object to get the year in full
            let mm = today.getMonth() + 1; // use the date object to get a the month. Months start at 0 so require a +1
            let dd = today.getDate(); // use the date object to get todays date;
            if (mm < 10) mm = '0' + mm // this adds a 0 to the front of the date if it is less than 10
            if (dd < 10) dd = '0' + dd; // this adds a 0 to the front of the month if it is less than 10
            // set a time variable
            var time = today.toLocaleTimeString('en-UK', { hour: 'numeric', hour24: true, minute: 'numeric' });
            // set a formatted date variable
            const formattedDate = `${yyyy}/${mm}/${dd} ${time}`;

            //check if we are not in edit mode
            if(!edit){
                // if we are not in edit mode then we can use a new ID
                taskID = highestID() + 1;
                // build the taskArray
                addTaskArray = {
                    id : taskID,
                    status : "incomplete",
                    content : taskInputEl,
                    created : formattedDate,
                    completed : false
                }
                // push the new array to the end of our existing task list
                taskArray.push(addTaskArray);
            }else{
                //if we are in edit mode then use the ID from the dupecheck we did earlier
                taskID = parseInt(document.getElementById("taskEditID").value);
                // Find the index of the task we want to edit
                const editIndex = taskArray.findIndex(task => task.id === taskID);

                if (editIndex !== -1) {
                    taskArray[editIndex].content = taskInputEl;
                }else{alert("Error: Could not find the record to edit!")}
                document.getElementById("taskEditID").value = "";
                document.getElementById("newTaskButton").classList.remove("task-edit");
                document.getElementById("newTaskButton").innerHTML = "Add Task";
            }

            loadTasks();
            document.getElementById("newTaskInput").value = "";
            document.getElementById("newTaskInput").focus();
            console.log(taskArray);
        }

    }
}