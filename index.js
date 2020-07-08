// console.log('im working im js im workl');
/*string
const what = "jinwon";
*/
/*boolean
const wat = true;
*/
/*Number
const wat = 66666;
*/
/*float
const wat = 445.5;
*/
/* array data
const monday  = "mon";
const tue  = "mon";
const wed  = "wed";
const thu  = "thu";
const fri  = "fri";

const dayOfWeek = ['1','2','3','4','5'];
dayOfWeek.push('6');
*/
/*Object*/
// const name = 'jinwown'
/*const jinwonInfo = {
    name : "jinwon",
    age : "28",
    gender :"boy",
    hensome : true,
    favMovies : ["올드보이","헌츠맨","더헌트"],
    favFood : [
        {
            name:"kimchi",
            fatty:false
        },
        {
            name:"buger",
            fatty:true
        }
    ]
};*/

/*function sayHello(name,age){
    console.log('hellow',name,'you have',age,'years of age');
}

sayHello('jinwon',15);

function sayHello(name,age){
   return `Hellow ${name} you are ${age} yeays old`;
}

const greetJinwon = sayHello('jinwon',28)
console.log(greetJinwon);
*/
/*const calculator ={
    plus : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    Squared: function(a,b){
        return a*b;
    },
    division :function(a,b){
        return a/b;
    }
}

const plus = calculator.plus(5,5)
const minus = calculator.minus(5,10)
const Squared = calculator.Squared(5,5)
const division = calculator.division(30,6)
console.log(`plus=>${plus}`);
console.log(`minus=>${minus}`);
console.log(`Squared=>${Squared}`);
console.log(`division=>${division}`);
*/

const title = document.querySelector('#title');
/*title.innerHTML = "Hi !! From JS";
title.style.color = "green";
console.log(title);
console.dir(document);
document.title = "hellow jinwon";*/
/*const BASE_COLOR = "rgb(52, 73, 94)";
const ORDER_COLOR = "rgb(127, 140, 141)";

function handleClick (){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = ORDER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}*/
function init(){
    
    title.addEventListener("click",handleClick);
}
init();




/*const age = prompt('How old are you');
console.log(age);

 if (age >= 18 && age <= 25) {
     console.log('you can drink');
 }else if(age >= 21){
    console.log('yong!!');
 }
 else{
     console.log('you cant');
 }*/