const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const taskContainer = document.querySelector('.tasks-container');

const handleAddTask =() => {
    const inputIsValid = ValidateInput();

    if (!inputIsValid) {
        inputElement.classList.add('error')
    }else{
        inputElement.classList.remove('error')
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerHTML = inputElement.value;

    taskContent.addEventListener('click',()=>{
        taskContent.classList.add('line');
        taskContent.classList.remove('line');
    })
   

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa');
    deleteItem.classList.add('fa-trash');
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteItem);
    

    taskContainer.appendChild(taskItem);

    inputElement.value =""
}

    

const ValidateInput = () => {
    return inputElement.value.trim().length > 0;
}

addTaskButton.addEventListener('click', () => handleAddTask());

