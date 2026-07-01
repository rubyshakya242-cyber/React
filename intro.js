
/*for(let i=0;i<=100;i++){
    console.log(i);
}

let i=0;
while(i<=100){
    console.log(i);
    i++;
}

let fruits= ["apple", "kiwi", "mango"];
console.log(fruits);
fruits.push("watermelon");
console.log(fruits);
console.log(fruits[2]);

let stack=[];
stack.push(2,12,12);//lifo
console.log(stack);
console.log(stack.pop());

let queue=[];
queue.push("apple", "lichi");
console.log(queue);
console.log(queue.shift());//fifo

//coersion
let a = String(20);
console.log(a, typeof a);
let b = Number("ktm");
console.log(b, typeof b);

//function
function add(a,b){
    return a+b;
}
console.log(add(3,4));

//arrow function no function keyword is used
 const mul = (a,b)=>{
   return a*b;
 };
 console.log(mul(2,3));
 

 let person={
    name:"ruby",
    age: 19
 };
 console.log(person);
  console.log(person.name);

  //class in js hera
  //naming convention
  camelCase: addNum, gerUser
  snake_case: add_num
  PascalCase: AddNumber
  

//hoisting

console.log(a);
var a=12; 

console.log(b);
let b=12; 

console.log(c);
const c=12; 


//scope(kata sama access garna milcha)
//global scope(can be access from outside)
//block scope({} bhitra )
//local scope(can only be access inside the function)

//global
let company="Esewa";
function Show(){
    console.log(company);
}
Show();

//block scope
{
    let city = "ktm";
    console.log(city);
}


//local scope
function display(){
    let age= 23;
    console.log(age);
}
display();

//parameter and arguments 
let arg=(a,b,c)=>{
    return a+b+c;
}
console.log(arg(12,13,14));//argements are those value that are passed when the function is called
  

//closure(child le parent ko function ko property  access  garna sakne lai)
function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter= outer();
counter();
counter();


//asynchronous(non blocking function) and synchronous function(blocking function)
//asynchronous task(async and await(fetch na vaye sama wait garcha) is used for database query)
console.log(1);
setTimeout(()=>{
    console.log(2)
},10000);
console.log(3);

//global execution context : memory creation phase( primary memory ma save or store), execution phase(rakheko lai process garne)
//memory creation phase( like address bus as it just take the address not data )
a-undefined
b-undefined
c-undefined
add-function

//execution phase(like data bus as it take data)
 a-5
 b-9
 c-3
 add-add()

let mul=(a,b,c)=>{
    return a*b*c;
}
let result=mul(2,3,4);
console.log(result);


import { response } from "express";

//event loop

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response=>response.json())
    .then(data=>console.log(data));
 

function outer(){
    let count=10;
    function inner(){
        count--;
        console.log(count);
    }
    return inner;
}
const counter= outer();
counter();
counter(); 


//event non blocking task sanga use huncha
fetch("https://jsonplaceholder.typicode.com/photos")
.then(response=>response.json())
.then((data)=> console.log(data));

const add=(a,b,c)=>{
    return a+b+c;
}
console.log(add(5555,7777,1414));

//IIFE :Immediately Invoked Function Experession
(function(){
    console.log("Welcome to JavaScript");
})();


//anonymouse: a fucntion without name
const greet= function(){
    console.log("Good Morning");
};
greet();


let Calc=function(a,b){
    return a+b;
};
console.log(Calc(20,30));


//callback function : a fucntion passed as argument
const parent = (func) => {
    console.log("Parent");
    func("Variable returned");
};

const child = (a) => {
    console.log("Children", a);
};

parent(child);


const teacher = (student) => {
    console.log("Good Morning");
    student("Hello Sir");
};

const student = (answer) => {
    console.log("Student:", answer);
};

teacher(student);


//hof highest arrow fucntion
//1. take function as input
//2. return function as output
//3. both at same time

const parent = () => {
    console.log("Parent");

    const child = () => {
        console.log("Child");
    };

    return child;
};

const result = parent(); 
result();                


const parent = (a) => {
    console.log("Parent");

    const child = (b) => {
        console.log("Child");
        console.log("Sum =", a + b);
    };

    return child;
};

const result = parent(10);
result(20);
*/
i am changing 