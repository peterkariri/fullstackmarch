//functions are a reusable block f code 
// //a functions takes in parameters (fixed or dynamic)
parameters>>these are placeholders where arguments or values are passed 
argument >>this are real time data form user that should be exectued by a particular 
function
to view  FUNCTINS OUTPUT WE USE THE CONSOLE.LOG 
but to give or execute a function we use the return statement at the end of a function block 
the return statement is used to terminate the function and return a value to the caller
afte the return statement nothing else is exectued

there are three ways of dfining a function {
    function declaration 
    function expression 
    arrw function 
}

function declaration >>this is defining a function via first {
    dfine the name function then the finction name then the
     parameters in the parenthesis and then the function body in the curly braces

     function calculateAge(param1,param2){
        //code goes here
     }

     //one advantage of function declaration is thaty it supports Hoisting
     /hositing is the scenario where you can write code before defining a function then calll it 
     or call a function before dfning it 
}

function expression >>this referes to assigning a function a variable name after 
which you call the variable name 

let calculateSum= function(param1,param2){

}
you call the variable name 
//this cannot be hoisted but is very useful in references (useful in assynchronous execution by 
passing the variable name(callbacks) )

arrow function ()
removes the function name then replaces ot with an arrow combined with a greater than 
symbol 

let arrowFunction=()=>{
    //code goes here 
}