//loops >>this are memethods of executing a block of code repeadedly until a certain condition is met{
/* this condition s what defines the loop 
there are various types of loops 
for loop 
for ...of loop
for ...in loop 
while loop 
do while loop
forEach
} */
/* for loop >>this is the original looping mechanism in programmng languages it has the following syntax {
    initialization >>the initialization is the first set of the variable using variable declaration methods 
    condition>>this refers to the characterisitcs that satisty the loop (comparison operators)
    increment/decrement(i++,i--)}>>this allows going to the next iteration or previous iteration  */
/* 
    for(let i=initialization;i<Condition;i++){
    //code to be executed
    } */

    //intitialize
    //condition will be comparing the lenght of the array to the variable 

    let score=[10,20,30,40,50,60,70,80,90,100,"peter","john","michael"]
    for (let n=0;n<score.length;n++){
        console.log(`the score OF THE STUDENTS ARE AS FOLLOWS AT INDEX ${n}: ${score[n]}`);
        
    }
    //TO DECONSTRUCT AN ARRAY USING TEMPORAL STRINGS TO PASS VALUES THAT ARE DYNAMIC
    //  WE USE THE CURLY BRAKCETS WITH THE DOLLLAR SIGN 