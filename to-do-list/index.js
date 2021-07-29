let button = document.getElementById('add');
let input = document.getElementById("user-input");
let formInput = document.querySelector('#form input');

button.addEventListener("click", () =>{
    //validate input field
    if (formInput.value.length == 0){
        alert("Please Enter a Task");
    }
    // add a new task
    else{
        document.querySelector('#todos').innerHTML += `
            <div class="task">
                <ul id="taskname">
                    ${formInput.value}
                </ul>
                <button class="delete">
                    <i class="far fa-times-circle"></i>
                </button>
            </div>
        `;

        // deleting a task
        let currentTasks = document.querySelectorAll('.delete');
        for(var i=0; i < currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        // marking completed task
        let tasks = document.querySelectorAll('.task');
        for(var i=0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        //clearing input field after each entry
        formInput.value = "";

    }
});

input.addEventListener("keypress", (event) =>{
    // add items to the list
    if (input.value.length > 0 && event.which ===13){
        document.querySelector('#todos').innerHTML += `
            <div class="task">
                <ul id="taskname">
                    ${formInput.value}
                </ul>
                <button class="delete">
                    <i class="far fa-times-circle"></i>
                </button>
            </div>`

            // deleting a task

        let currentTasks = document.querySelectorAll('.delete');
        for(var i=0; i < currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        // marking completed task
        let tasks = document.querySelectorAll('.task');
        for(var i=0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        formInput.value = "";
    }
})