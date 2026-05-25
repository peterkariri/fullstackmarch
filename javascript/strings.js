/* this are methids that allow us to manipulate strings and make changes usch as follows 
??
check the length of a string we use the length
with the lenght method we are able to get even white spaces 
*/
let sentence="I am doing pilates for weekend"

console.log(sentence.length);

//split>>you can be able to split a stirng into an array of characters ,and this will enable you to acces the stirngs independently 
//this method uses delimeters to define what to space the string characters

let newSentence=sentence.split(" ")
console.log(newSentence);

//upperCase>>convert a tring of characters to capital letters 
let capitalSentence=sentence.toUpperCase()

console.log(capitalSentence);

//lowercase>>converts a set of string characters to lowe case 

let smallSentence=sentence.toLowerCase()

console.log(smallSentence);

//we can be able to chain methods together via the dot notation 

let hybridSentence=sentence.toUpperCase().split(" ").reverse()

console.log(hybridSentence);

//reverse method>>the reverse method allow one to reverse a string that has been changed to an array of characters 
//this is important when creating passwords and backed validation such that you can reverse a users password beofre hashing it 

//index of a string >>an index refers to the number given to a character
// it returns the first instance of the stirng character \

let newYear='I want to be  zuhura a fullstack Eng'

console.log(newYear.indexOf("zuhura"));

//includes>>this is used to loop through stirngs of characters and search/filter through it maping out the specified 
//keywords and returns a boolean if the specified word is found or not 

let inludesSentence=newYear.toLowerCase().includes("eng")

console.log(inludesSentence);


//startswit>>it is used to search if a sentenxce or a string starts with the set of characters specified 
console.log(newYear.startsWith("i"));

//endsWith>>retunds  a boolean if a search os found 



//join ,substring ,slice ,

/* substring >>this is the extraction of a part of a string that is different from the original string
subtrings works in indexes in which we have a starting index and an end index 
both substring and slice are used together to extract string components 
the only difference with the two is that slice works also with arrays while substirng only works with strings 
also slice takes in negative indexes while subtring only takes in positive indexes(incase you pass a negative index 
    to a subtring it returns zero 
    the meaning of a negative indexes that it starts counting from the right side 
) */

let newWeek='This week has a lot of Holidays '

let result=newWeek.substring(5,10)

console.log(result);

let result2=newWeek.slice(-30)
 result2=newWeek.slice(1,20)

console.log(result2);

let email='johnstoneweidero@gmail.com'

let nameEmail=email.slice(0,email.indexOf("@"))

console.log(nameEmail);



/* for join this is used to join a set of array characters into stirngs with a delimeter 
for this items should be arrays to work  */

let fruits=["mangoes","oranges","bananas","Lemon","cabbage"]

let fruitResult=fruits.join("-")

console.log(fruitResult);

//putting hash infront of fruits 

let fruitResult2= "#" + fruits.join("#")

console.log(fruitResult2);







