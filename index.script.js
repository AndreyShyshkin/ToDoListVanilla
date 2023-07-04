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
  
      newBlock.appendChild(newText);
      newBlock.appendChild(doneButton.element);
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
  
function insertValue() {
    const input = document.getElementById("ToDoInput");
    const value = input.value;
    const newTask = new TaskBlock(value);
  
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.appendChild(newTask.element);
  }
  
function markDone(button) {
    const paragraph = button.parentNode.querySelector("p");
    if (paragraph.classList.contains("line-through")) {
      paragraph.classList.remove("line-through");
      button.innerHTML = "Not Done";
    } else {
      paragraph.classList.add("line-through");
      button.innerHTML = "Done";
    }
}
  
function removeComponent(button) {
    const componentDiv = button.parentNode;
    componentDiv.parentNode.removeChild(componentDiv);
}
  

  
