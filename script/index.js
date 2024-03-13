const taskInput = document.querySelector('.input-section__txt');
const taskAddBtn = document.querySelector('.input-section__btn');
const taskList = document.querySelector('.task-section__tasklist');
const create = document.getElementById('create');
const done = document.getElementById('done');

let toDoCount = 0;
let checkedCount = 0;

function addTask() {
    if (taskInput.value !== '') {
        toDoCount++;
        taskList.innerHTML += `
        <li class="task-section__list">
            <div class="task-section__input-wrapper">
                <input type="checkbox" class="task-section__btn" />
                <p>${taskInput.value}</p>
            </div>
            <i class="fa-regular fa-trash-can task-section__delete"></i>
        </li>
        `;
        create.innerHTML = toDoCount;
        taskInput.value = '';
        updateCheckedCount();
    }
}


function updateCheckedCount() {
    const checkboxes = document.querySelectorAll('.task-section__btn');
    checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    done.innerHTML = checkedCount;
}

function clearTasks() {
    taskList.innerHTML = '';
    toDoCount = 0;
    checkedCount = 0;
    create.innerHTML = toDoCount;
    done.innerHTML = checkedCount;
}

taskAddBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('change', updateCheckedCount);

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task-section__delete')) {
        e.target.parentElement.remove();
        toDoCount--;
        create.innerHTML = toDoCount;
        updateCheckedCount();
    }
});

