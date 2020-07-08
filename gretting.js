
const form =document.querySelector(".js-form"),
      input =form.querySelector("input"),
      greeting =document.querySelector(".js-greetings");

const USER_LS = 'currentUser',
      SHOWWING_CN = 'showing';  

function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWWING_CN);
    form.addEventListener('submit',handleSubmit);
}
      
function paintGreeting(text){
  form.classList.remove(SHOWWING_CN);
  greeting.classList.add(SHOWWING_CN);
  greeting.innerText = `Hellow ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //she is not
        askForName();
    }else{
        // she is 
        paintGreeting(currentUser);
    }
}

function init(){

    loadName();
}
init();