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

/*     the second loop is the while loop and for the while loop we have the following synstax {
        fisrt we intialize the variable \
        then we exectute the condition and then the increment 
        if you forget the increment the conditon executes infinitly untill ram space is depleted 
        the increment/decrement is used to move to the next iteration or previous iteration for the condition to be satisfied 

    } */

        let countTwo=0

        while(countTwo<=10){
            console.log(`the count is ${countTwo}`);
            countTwo += 6
        }
/* do..while loop >it executes one code first then checks the condtion 
{
it will always execut atleast once 

do (SOMETHING)
WHILE (CONDITION)

}  */
let attempts=1

while(attempts<=3){
    console.log(`the attempt number is ${attempts} ,you have ${3-attempts} attempts left`);
    attempts++
}

/* let number=100000
do{
    console.log(`the number is ${number}`);
    number++
}
while(number<=10) */

/* for of loop >>this is used to loop through items in an arrrays 
syntax {
    for( let item of arrayname){
        logic to be executed 
    }
        for(let count in counts){
            }
} */

            let names=["peter","john","michael","james","mary","susan"]
            for (let name of names){
                console.log(`the name is ${name}`);
                
            }

            /* for ..in {
                mostly this is used in objects to access the key pair value of the object
                syntax {
                    for(let key in object){
                        logic to be executed 
                    }
                }
            }
                */
               let school={
                name:"Eldohub",
                student:"Neema",
                teacher:"Mr. John",
                class:"fullstack"
               }
               for(let key in school){
                console.log(`the key is ${key} and property is ${school[key]}`);
                
               }


               