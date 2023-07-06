window.addEventListener("load", () => {
  loadTasksFromLocalStorage();
});


class TaskBlock {
    constructor(value) {
      this.value = value;
      this.element = this.createBlock();
    }
  
    createBlock() {
      const newBlock = document.createElement("div");
      newBlock.className = "flex mb-4 items-center";
  
      const newText = document.createElement("p");
      newText.className = "w-full text-grey-darkest";
      newText.innerHTML = this.value;
  
      const doneButton = new DoneButton();
      const removeButton = new RemoveButton();
      const editButton = new EditButton();
  
      newBlock.appendChild(newText);
      newBlock.appendChild(doneButton.element);
      newBlock.appendChild(editButton.element);
      newBlock.appendChild(removeButton.element);
  
      return newBlock;
    }
}
  
class DoneButton {
    constructor() {
      this.element = this.createButton();
    }
  
    createButton() {
      const button = document.createElement("button");
      button.className = "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green";
      button.innerHTML = "Done";
      button.addEventListener("click", () => this.markDone());
      return button;
    }
  
    markDone() {
      const paragraph = this.element.parentNode.querySelector("p");
      if (paragraph.classList.contains("line-through")) {
        paragraph.classList.remove("line-through");
        this.element.innerHTML = "Not Done";
      } else {
        paragraph.classList.add("line-through");
        this.element.innerHTML = "Done";
      }
    }
}
  
class RemoveButton {
    constructor() {
      this.element = this.createButton();
    }
  
    createButton() {
      const button = document.createElement("button");
      button.className = "flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red";
      button.innerHTML = "Remove";
      button.addEventListener("click", () => this.removeComponent());
      return button;
    }
  
    removeComponent() {
      const componentDiv = this.element.parentNode;
      componentDiv.parentNode.removeChild(componentDiv);
    }
}

class EditButton {
  constructor() {
    this.element = this.createButton();
  }

  createButton() {
    const button = document.createElement("button");
    button.className = "flex-no-shrink p-2 ml-2 border-2 rounded text-blue border-blue hover:text-white hover:bg-blue";
    button.innerHTML = "Edit";
    button.addEventListener("click", () => this.editTask());
    return button;
  }

  editTask() {
    const paragraph = this.element.parentNode.querySelector("p");
    const newText = prompt("Введите новый текст задачи:", paragraph.innerText);
    if (newText !== null) {
      paragraph.innerText = newText;
      saveTasksToLocalStorage();
    }
  }
}
  
function insertValue() {
  const input = document.getElementById("ToDoInput");
  const value = input.value;
  if(value == ""){
    alert("Вы не ввели задачу!")
  }else{
    const newTask = new TaskBlock(value);

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.appendChild(newTask.element);

    saveTasksToLocalStorage();
  }
}

function saveTasksToLocalStorage() {
  const taskElements = document.querySelectorAll(".flex.mb-4.items-center");
  const tasks = [];
  taskElements.forEach((element) => {
    const text = element.querySelector("p").innerText;
    tasks.push(text);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);
    tasks.forEach((task) => {
      const newTask = new TaskBlock(task);
      const resultContainer = document.getElementById("resultContainer");
      resultContainer.appendChild(newTask.element);
    });
  }
}
