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

