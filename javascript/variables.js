/* variables are containers used for storing data values >>we assing data to varibles 
in js we can declare variables in three ways {
    const>>this is used to declare constant variables that willnever be reassigned and will never change {id number }
    var>>used to declare varibales that can be reassinged (name can be changesd)and allows reassingmend in local scoping 
    let >>used to declare variables that can be reassinged but on the same scope
}
naming of variables {
    you have to come up with a unique memorable name 
    we use various naming conventions 
    {
        camel case >>we capitalize every first letter of a noun except the first one 

        let firstName=

        this camel case is syntactically advised to be used in js 

        snake case >>we use underscore to seperate the names >small lettters 

        let first_name=

        used in python mostly 

        pascal naming convention {
            we capitalis the first letter of every noun 

            let FirstName
        }
    }

    var{variable name}={value}
        let {variable name}={value}

            const{variable name}={value}
to output anything to the console (viewing )we call the js  method(console.log)
} */

var firstName="Brian"
let secondName="Mkenya"
const age=64

console.log(firstName);

//redeclare the variables

firstName="Purity"
secondName="Peter"

console.log(firstName);

/* as you can see here we are able to reassign the values of the varaibles assigned by let and var but we cannot reassing the const varibale 
this shows that js as a language is interpreted >>execution occurs line by line and returns an error made instantly and terminates execution of the other lines  */






