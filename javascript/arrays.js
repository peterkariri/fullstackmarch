//arrrays are a collection of related data  that are used to store dat/information  //
//we use the square brackets to define arrays or the array constructor method to also define it
//bracket

let fruits=["apple","mangoes","banana"]

//constructor>>we use the newArray construcotr method

console.log(fruits);

let cars=new Array("benz","volvo")

//to change elements at a specified index

//we use the index of the item assigned to a new value which will replace the existing value

fruits[2]="pineapple"
fruits[10]="humberger"

console.log(fruits);


//removing elements >>to remove elements we use the pop(),shift(),
//for pop we remove the elements at the end of an array 

fruits.pop()

console.log(fruits);

fruits.shift()
console.log(fruits);
//adding elements 
/* we use push and unshift to add elements specificly to the array 

push()>>add an item at the end of the array
unshift>>adds an item at the beginnning of an array */


fruits.unshift("beatroot","Ovacado")

console.log(fruits);

fruits.push("Strawberry","Pawpaw")
console.log(fruits);

let sentence="I have the following fruits in my shop :"  + " "+fruits.join()

console.log(sentence);

//checking the lenght

console.log(fruits.length);




