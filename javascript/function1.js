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

//accesing using string interpolation
console.log(`My name is ${data[0].name} 
and I am ${data[0].age}.My gender is ${data[0].gender} where I attend 
${data[0].institute} to persue a career in ${data[0].course} 
cohort ${data[0].year} whic has always been my dream. `);

//method
/* let console={
    log:function(){

    }
} */
console.log(data[2].name);

//sntax of functions 
/* a function is a reusable code block 
functions are defined u three ways 
function declaration 
function expression 
arrow function  */

//function declaration
/* declare the function keyword then the function name then the noraml brackets o gold the parameters 
afterwards dclare the curly brakcets to list the logic of the function 
functions use a return keyword to give back a value after computation and this keyword also terminates the function 
>>anything after the return keyword is not exectued 
 when you are executing a function you need to call it (invoking its name using normal brackets at the end of thename)
 when calling the function you have to pass in arguments in the brackets 
*/
function getSum(param1,param2){
     return param1 * param2
}

 console.log(getSum(1066666667777,15123456789876543));
  

 /* theyre are three ways of claring strings {
    using single quotes 
    using double quotes 
    using backtick 
 }

 we use delimeters with string + concatenation 
 */
let firstName="Basil"

let secondName='Juma'
//using the plus method

let fullname= "My NAME IS "+firstName +" "+ secondName+ ' '+"AND " + " i AM A FULLSTACK SOFTWARE eng"

console.log(fullname);

//usong the temporal strings (backticks )
/* we use the dollar sign to pass placeholders for variables and data types 
the dollar sign will have a curly brackets 
${firstName}
 */
let fname=`My Name is ${firstName} ${secondName} and I am a Software Engineering student`

console.log(fname);
