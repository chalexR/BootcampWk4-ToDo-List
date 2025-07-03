// ToDo List Scripts
// Version 0.2

//Wait for Document to load
document.addEventListener("DOMContentLoaded", () => {

    //Set a constant for the task button
    const taskButton = document.getElementById("newTaskButton");

    // add an event listener to see when the new Task Button has been clicked
    taskButton.addEventListener("click", () => {
        addTask()
        //DEBUG
        //console.log("newTaskButton");
    });

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
            var innerHTML = `
                <td>Incomplete</td>
                <td>${taskContent}</td>
                <td>${formattedDate}</td>
                <td><button class="complete-btn">Mark as Complete</button></td>
            `;
            var newTaskEl = document.createElement("tr");
            newTaskEl.innerHTML = innerHTML;
            taskBodyEl.appendChild(newTaskEl);


        }else{alert("Please type a task in the input box!");}
    }

});