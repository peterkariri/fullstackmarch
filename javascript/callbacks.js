/* callbacks>>this refers to a function that has been passed as an argument 
to another function and is executed after
 some kind of event or condition is met
 //on a restaurants ()
 //a high order function is the parent to the callback function 
 //the callback function is passed as an argunment toe hte high 
 // order function and is executed after the high order function 
 // has completed its task
 */

 //callback function
function greet(name){
    console.log(`Hello, ${name}!`);
}
//high order function
function greetUser(callback){
    return callback("John");
}
console.log(greetUser(greet));

//creating a calculator 
function calculateSum(a,b){
    return a + b;
}
console.log(calculateSum(5, 3));

//making it dynamic by using a callback function

function calculateSumCallback(a,b,addDynamic){
    return addDynamic(a,b);//return the operation a and b as passed from this high order function when calling it  
}

function addDynamic(a,b){
    return a + b;
}
console.log(calculateSumCallback(5,3,addDynamic));

//A MUTLIPLICATION EXAMPLE USING CALLBACKS
//arrays high order functions >>this are functions that operate on arrays 
// and take a callback function as an argument to perform a specific operation on each element of the array
//they include forEach, map, filter, reduce,some,every,sort// etc

let numbersArray=[1,2,3,4,5,34,56,787,9,3343,656,868,454];


numbersArray.forEach(function(num){
    console.log(num * 2);
})

//filtering an array using the filter method and a callback function
numbersArray.filter(function(num){

    if(num %2 ===0){
        console.log(`${num} is an even number`);
    }
    else{
        console.log(`${num} is an odd number`);
    }
})

let students=[
    {name:"John",age:20},
    {name:"Jane",age:22},
    {name:"Doe",age:19},
    {name:"Smith",age:21}
]
//use a map to display the student nmes in uppercase

 students.map(student=>{
    console.log(student.name.toUpperCase());
    //filter those with age greater than 20
    if(student.age >= 20){
        console.log(`${student.name} is older than 20`);
    }
    else{
        console.log(`${student.name} is younger than 20`);
    }
 })