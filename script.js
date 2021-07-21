var button=document.getElementById("enter");
var input=document.getElementById("userInput");
var ul=document.querySelector("ul");
var clear=document.getElementById("clear");

var tasks=document.querySelectorAll("i");
AddEventToTasks(tasks);

function AddEventToTasks(tasks){
    for(var i=0; i<tasks.length; i++){
        tasks[i].addEventListener("click",eraseTask);
    }
}

function inputLength(){
    return input.value.length;
}

function createButton(){
    var newButton=document.createElement("i");
    newButton.classList.add("fa", "fa-trash");
    return newButton;
}
function createDivLI(){
    var newDiv=document.createElement("div");
    newDiv.classList.add("list-item");
    return newDiv;
}

function createListElement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    newDiv=createDivLI();
    newButton=createButton();
    newDiv.appendChild(li);
    newDiv.appendChild(newButton);
    ul.appendChild(newDiv);
    input.value="";
    tasks=document.querySelectorAll("i");
    AddEventToTasks(tasks);
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterEnter(event){
    if(inputLength() > 0 && event.key==="Enter"){
        createListElement();
    }
}

function clearList() {
    ul.innerHTML = "";
}

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function eraseTask(e){
    e.target.parentNode.style.display="none";
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterEnter);
ul.addEventListener("click", strikeThrough);
clear.addEventListener("click", clearList);


