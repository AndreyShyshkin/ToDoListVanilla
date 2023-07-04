function insertValue() {
    let input = document.getElementById("ToDoInput");
    let value = input.value;
    let newBlock = document.createElement("div");
    newBlock.className = "flex mb-4 items-center";
    let newText = document.createElement("p");
    newText.className = "w-full text-grey-darkest";
    let doneButton = document.createElement("button");
    doneButton.className = "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green";
    let removeButton = document.createElement("button");
    removeButton.className = "flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red";
    newText.innerHTML = value;
    doneButton.innerHTML = "Done";
    doneButton.setAttribute("onclick", "markDone(this)");
    removeButton.innerHTML = "Remove";
    removeButton.setAttribute("onclick", "removeComponent(this)");
    let resultContainer = document.getElementById("resultContainer");
    resultContainer.appendChild(newBlock);
    newBlock.appendChild(newText);
    newBlock.appendChild(doneButton);
    newBlock.appendChild(removeButton);
}

function markDone(button) {
    let paragraph = button.parentNode.querySelector("p");
    if(paragraph.classList.contains("line-through")){
        paragraph.classList.remove("line-through");
        button.innerHTML = "Not Done";
    }else{
        paragraph.classList.add("line-through");
        button.innerHTML = "Done";
    }
    
}

function removeComponent(button) {
    let componentDiv = button.parentNode;
    componentDiv.parentNode.removeChild(componentDiv);
}