let prices = [1200, 3400, 800, 5600, 2300, 1500];

let expensive=prices[0]
let i=0

while(i<prices.length){
    if(prices[i]>expensive){
        expensive=prices[i]
    }
    i++
}
console.log(`the expensive price is ${expensive}`);

//cheapest product
let cheapest=prices[0]
let j=0
while(j<prices.length){
    if(prices[j]<cheapest){
        cheapest=prices[j]
    }
    j++
}
console.log(`the cheapest price is ${cheapest}`);

//diffeerence between the expensive and the cheapest product
let difference=expensive-cheapest
console.log(`the difference between the expensive and the cheapest price is ${difference}`);

//simulate login

let passwords = ["admin12", "hello123", "password", "eldohub2025"];
let p=0
let correctPassword="eldohub2025"
do{
    console.log(`Login in process: ${passwords[p]}`);
    
    if(passwords[p]===correctPassword){
        console.log('login successful');
        break
    }
    console.log('incorrect password, try again');
    p++
    
    
}
while(p<passwords.length)

    //MORE THAN FOUR LETERS

    let names = ["Peter", "James", "Mary", "Susan", "John", "Michael"];
    let count=0

    for(let name of names){
        let upperCaseName=name.toUpperCase()
        console.log(`the name in uppercase is ${upperCaseName}`);
        let moreThan4Letters=upperCaseName.length>4
        console.log(`the name ${upperCaseName} has more than 4 letters is ${moreThan4Letters}`);
        if(moreThan4Letters){
            //GIVE THE COUNT OF THE TOTAL  NAMES WITH MORE THAN 4 LETTERS
            count++
            console.log(`the count of names with more than 4 letters is ${count}`);
           
        }
    }
let student = {
    name: "Trevor",
    age: 20,
    course: "Web Development",
    city: "Nairobi"
};
let countStudent=0

for(let key in student){

    console.log(`the value of ${key} `);
        console.log(`the value is ${student[key]}`);
        countStudent++
        console.log(`the count is ${countStudent}`);

}
