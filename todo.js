const toDoForm =document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event){
    const btn =event.target;
    const li = btn.parentNode
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDOS();
}

function saveToDOS (){
    localStorage.setItem(TODOS_LS ,JSON.stringify(toDos))
}

function paintToDo(text){
   const li = document.createElement('li');
   const delBtn =document.createElement('button');
   delBtn.innerText = "✖";
   delBtn.addEventListener("click",deleteToDo);
   const span = document.createElement('span');
   const newId =  toDos.length +1;
   span.innerText= text;
   li.appendChild(delBtn);
   li.appendChild(span);
   li.id = newId;
   toDoList.appendChild(li);
   const toDoObj ={
       text : text,
       id : newId
       
   }
   toDos.push(toDoObj);
   saveToDOS();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue  = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function someThing(toDo){
    paintToDo(toDo.text);
}

function loadToDOS(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos  = JSON.parse(loadedToDos);
        parsedToDos.forEach(someThing);
    }
}


function init (){
    loadToDOS();
    toDoForm.addEventListener('submit',handleSubmit)
}      

init();