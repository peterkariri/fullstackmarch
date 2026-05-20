//syntax of arrays 
/* an array is a collection of logically related elements and its defined by square brackets and starts counting at index zero 
the thing about arrays is that it can take any primitive data type and non primitive data type as its data
we access arrays usign the square brackets method where we pass in te index of the array 
each element inthe array is seperaed by a comma
*/

let vehicle=["BMW","Subaru Impreza","M4","MAYBACH","FORD RAPTOR",'g-WAGON',"Bently","Nissan Skyline","Porche",true,34,56,677,34]

console.log(vehicle[20]);

//syntax of object
/* this refere to key -value pairs that are usd for storing paired information in javascript 
mostly ehy ae used for document storage methods 
literally everything in javascript is returned as an object hence the JSON (javascript object notation)
they are dfined by curly brackets 
and are accessed by the dot notation chaining as follows : */

let person1={
    name:"Zuhura",
    age:30,
    gender:"female",
    institute:"Eldohub Tech & AI",
    course:"Software Engineering",
    year:2026,
}

console.log(person1.name);


let data=[
{ 
    id:1,
    name:"Zuhura",
    age:30,
    gender:"female",
    institute:"Eldohub Tech & AI",
    course:"Software Engineering",
    year:2026,
},
{ 
    id:2,
    name:"Peter",
    age:45,
    gender:"Male",
    institute:"Eldohub Tech & AI",
    course:"ML Engineering",
    year:2026,
},
{ 
    id:3,
    name:"Jacob",
    age:25,
    gender:"Male",
    institute:"Eldohub Tech & AI",
    course:"Data Engineering",
    year:2026,
},

]
console.log(data[2].name);

//sntax of functions 
/* a function is a reusable code block 
functions are defined u three ways 
function declaration 
function expression 
arrow function  */

//function declaration
/* declare the function keyword then the function name then the noraml brackets o gold the parameters 
afterwards dclare the curly brakcets to list the logic of the function  */
function getStudents(param1,param2){
    //logic
}