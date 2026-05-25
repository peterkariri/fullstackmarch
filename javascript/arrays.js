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

//includes
//this method is used to search if an item is included in the array 

//indexoff..RETUNS THE index of the item selected 

let students=["Neema",'Jacob',"Marion","Trevor","Basil","Bannis","Griffin","Masters","Francis"]

let newAnswer=students.includes("jacob")

newAnswer=students.indexOf("Neema")


console.log(newAnswer);

//THey take an existing array and do some operatinto to it to return a new array based on the logic that has been given 

//map
let numbers=[2,4,6,34,545,232,453,5]
 
let result=numbers.map((number)=>{
  return number *4
})

console.log(result);


//filter
let result2=numbers.filter((number)=>{
    return number>300
})
console.log(result2);




