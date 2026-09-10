// SELECT ITEMS

const form = document.querySelector(".to-do-list-form");
const task = document.getElementById("task");
const submitBtn = document.querySelector(".submit");
const container = document.querySelector(".task-container");

const clearBtn = document.querySelector(".clear");
// edit option (later)
//EVENT LISTENERS
// submit form
form.addEventListener('submit',addTask);
// FUNCTIONS
function addTask (event) {
    // 1. Stops page from reloading
    event.preventDefault();
    //2. gets task that was inputted
    const value = task.value;
    //3. Creates div for tasks
    const element = document.createElement('div');
    // add class
    element.classList.add('added-task')
    
    
   //
    element.innerHTML = `
    <p class="title">${value}</p>
    
        <button class="edit-button">
          <i class="edit"></i>
        </button>
        <button class="delete-button">
            <i class="trash"></i>
        </button>
   `
    container.appendChild(element);
    
}
// diaply alert
function displayAlert(text,action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`)
    },1000);
}