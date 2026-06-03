//what is an operator {
//operators are logical controllers that perform a particular action to operands 

/* let sum=9+3
9,3>>operands
+operator 


}
//arithmetic operators

additional operator{
    used for aritheetic adition 
} */

    let sum=9+3;

    console.log(sum);
    

 //minus/subtraction operator>>does a substraction 
 
 let num1=10
 let num2=12

 let diff=num2-num1

 console.log(diff);

 //division>whch does a division to numbers >>we use the front slash 

 let div=num2/num1

 console.log(div);
 
 //there is a differece between divisin(/) and modulus (%) the modulus is used to give the reminder of a division 

let mod=num2%num1

console.log(mod);

//multiplication >>we use the asteric Symbol to define multiplying elements (*)

let mult=num2*num1

console.log(mult);

 //comparison operators >>they are used to compare the logic state of various values 
 //they include >,<,>=,<=,==,====,!==

 let age=18

 if(age>=18){//true
    console.log("you are a citizen ");
    
 }
 else{//false
    console.log("you are a minor");
    
 }

 //assignment operator>>we assing waluves on the rigt side to what is on te left side 
 //these operstor is defined by the equal sign 

  let Number=18//18 has been assigned to NUmber so when you want to access it you call number 

  //as compared to the equal sign operator which most tend to confuse 

  //== (equal )

  //=== (explicitly equal )

  let number=50

  let newNumber="50"
  

  if (number===newNumber){
    console.log("yes");
    
  }
  else{
    console.log("change data type explicitly ");
    
  }

/*   logical operators >>they allow 
  logical computations to be exececuted (two exeutions in parallel ,authtentication ) 
  WE refer to them as Logi gates
  they include  
  logical AND,>>this exclussivley evaluates to a true(1+1=1)>>1 is a true (true 
  +true =true ) 
  this is shpwn by &&(username && password === the one stored in database 
  successfull logic

  LOGICAL NOT 
  ,LOGICAL OR>>which for execution only one of the variables should be true
   (1 + 0=1),0+1=1
  {
  if(driver licence || nationalcredentils == credentils in user profile )
  apply for a visa 
  }
  the or is shown by || 


  the logical not (!) is used to negate the logicial AND AND OR ,YOU PREFIX
   THE EXCLAMATIONMARK BEFORE THE 
  VALUES 

  NOT EQUAL TO {
  !==
  }
  With logical gates we use them for software eng ,hardware eng 
  */
//conditonal statements>>are statemtns that conrol the logical execution of code 

//if>>exectues only when a condition is set to truth {
/* the syntax is as follow>>always use the three equal signs ,the normal brakcets,and the curly brackets 

if(contition){
  exectuion if the conditionis true 
  this only executes the truthy part 
}
} */

/* let day='Wednesday'

if(day==="Thursday"){
    console.log("its a Thursday");
    
} */
  
//we introduce the else block to handle the negative part 


/* if(day==="Thursday"){
    console.log("its a Thursday");
    
}
  else{
    console.log("its another day");
    
  } */

 //nested if else >>is used to execute nested logic (authentication ,fetching info from backed 
 //where comparison is needed ) 

/*  we can have multiple else if to handle various conditonal variations 
 we can have the else to terminate the condition once a default value is needed after 
 none of the conditions are met 

 syntax {
    if(){

    }
    else if(){

    }
    ... various else if 

    else(){

    }
 }

 */

 let marks =78

 if(marks >= 60 && marks <=69){
    console.log("student has a B-");
    
 }
else if(marks >= 70 && marks <=79){
    console.log('student has a B');
    
}
else if(marks >= 80 && marks <=89){
    console.log('student has a B+');
    
}
else if(marks >= 90 && marks <=95){
    console.log('student has a A-');
    
}
else if(marks >= 96 && marks <=100){
    console.log('student has a A');
    
}
else{
    console.log('Invalid Passmark');
    
}

//is the switch statement that does almost the same thing 
/* with the switch statement we use case syntax and break syntax to terminal the loop because if we dont 
js will execute infinitly  */
/* define a variable 
define the switch block 
inside the switch block you define the cases
the case >>handles the various cases 
the break>>avoids and infinite loop 
the default>gives the default value once no case is satisfied
*/
let day='WEDNESDAY'

switch (day) {
    case 'Monday':
        console.log('It is monday');
        
        break;

        case 'Tuesday':
        console.log('It is Tuesday');
        
        break;
     case 'Wednesday':
        console.log('It is Wednesday');
        
        break;
    case 'Thursday':
        console.log('It is Thursday');
        
        break;

        case 'Friday':
        console.log('It is Friday');
        
        break;

    default:
        console.log('It is a weekend');
        
        break;
}

//BANK 

let balance=50000
let withdrawal=20000

if(balance>=withdrawal){
    console.log("Succefful transaction");
    
}
else{
    console.log("insufficient Funds your Balance is "+ balance );
    
}

