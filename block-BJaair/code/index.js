let form = document.querySelector('.input-form');
let cardsRoot = document.querySelector('.cards');

class Task {
    constructor(task, category) {
        this.task = task;
        this.category = category;
    }

    showTask () {
        
        let div = document.createElement('div');
        let catElm = document.createElement('input');
        let taskElm = document.createElement('input');

        catElm.value = this.category;
        catElm.classList.add('display-category');
        taskElm.value = this.task;
        taskElm.classList.add('display-task');
        div.classList.add('card');
        catElm.type = taskElm.type = 'text';

        catElm.addEventListener('blur', () => {
            let val = catElm.value;
            this.updateCategory(val);
            localStorage.setItem('allTasks', JSON.stringify(allTasks));
        });

        taskElm.addEventListener('blur', () => {
            let val = taskElm.value;
            this.updateTask(val);
            localStorage.setItem('allTasks', JSON.stringify(allTasks));
        })

        div.append(catElm, taskElm);
        cardsRoot.append(div);  
             
    }

    updateCategory(newCategory) {
        this.category = newCategory;
    }

    updateTask(newTask) {
        this.task = newTask;
    }
}

function createUI() {
    cardsRoot.innerHTML = '';
    allTasks.forEach(task => task.showTask());
}

let allTasks = JSON.parse(localStorage.getItem('allTasks')) || [];
allTasks = allTasks.map( obj => {
    // JSON.parse returned normal {} instead of Task object, hence converting them back
    let newTaskObj = new Task(obj.task, obj.category);
    return newTaskObj;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let task = event.target[0].value;
    let category = event.target[1].value;
    allTasks.push(new Task(task, category));
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
    event.target[0].value = event.target[1].value = '';
    event.target[0].placeholder = 'Enter Task Here';
    event.target[1].placeholder = 'Enter Category Here';
    createUI();
})

localStorage.setItem('allTasks', JSON.stringify(allTasks));
createUI();