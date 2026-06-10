/* //functions are a reusable block f code 
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
} */

    //checking if a number is odd or even 
    //use if statement(operators & function )

    function isEvenNumber(num){
        if(num % 2 ===0){
            console.log(`${num} is even `);
        }
        else{
                        console.log(`${num} is odd `);
        }
    }

    isEvenNumber(11486,23,54)

    //to check if we have vowels in our input 


    let checkVowels=function(string){
       let count=0 //store the vowels in my string
       let vowels="aeiouAEIOU"
       for(let i=0;i<string.length;i++){
        if(vowels.includes(string[i])){
          count++
        }
       }
                 return count        

    }
    console.log(checkVowels("fullstack software engineering"));
    
    //find the largest number in an array 

    //password validation 
    //we have a regex (special characters that define strng passwords )
    //user input (parameters >>using a function )
    //check if the user input has the characters (nested if else statement )

    function createStrongPass(password){
        let hasNumber=false
        let hasSpecial=false;
        let strongCharacters='#@&*$!_()?/+*'

        //check and return invalid passwords
        if(password.length<10){
            //return
            console.log("password length should be more than 8 characters ");
            
        }
        
        for(let i=0;i<password.length;i++){
            let char=password[i]

            if(!isNaN(char)){
                hasNumber=true
            }
            if(strongCharacters.includes(char)){
                hasSpecial=true
                console.log("password should contain special characters");
                
            }

        }
        if(hasNumber && hasSpecial){
            console.log("you have a strong password");
            
            return "you have a strong password"
        }
        else{
                        console.log("you have a weak password");

            return "you have a weak password"
        }

    }
    createStrongPass("hellowewqwq")
    