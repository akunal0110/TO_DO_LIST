    const listContainer = document.querySelector('.list-container');
    const inputBox = document.querySelector('input[type="text"]');
    const addTaskButton = document.querySelector('.AddTask');
    const deleteAll=document.querySelector('.deleteAll');

    addTaskButton.addEventListener('click', () => {
        addTask();
    });

    function addTask() {
        if (inputBox.value === '') {
            alert('Please Enter the Text');
        } else {
            const task = document.createElement('li');
            task.textContent = inputBox.value;
            listContainer.appendChild(task);

            const span = document.createElement('span');
            span.textContent = '\u00d7';
            task.appendChild(span);
        }
        inputBox.value = '';
        saveData();
    }

    deleteAll.addEventListener('click',()=>{
        listContainer.innerHTML=''
    })

    listContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.add('checked');
            saveData();
        } else if (event.target.tagName === 'SPAN') {
            event.target.parentElement.remove();
            saveData();
        }
    });

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showData() {
        listContainer.innerHTML = localStorage.getItem("data") || '';
    }

    showData();
