/* node js >>this refers to a  javascript runtimepackange manager that allows us to run 
javascript outside the browser 
{
    how does node js do this??node js is written on top of the crhom v8 engine {
        compiles and execute js 

        libuv>>this is a C library that gives node js acces ott he operting system allowing it to do file manipulation {
            FileSystem,networking ,timers event 
        }
    }
express >>this is a light weight framework for node js that make s it easier for routing in web applications 
pacakge manager 
module>>this is a javascript file that contains code such as functions ,variables that is resued 

to run node js or any script in javascript we use the node then the server name 

to initialize a node js application we run the command npm init -y/npm i -y{
package.json 

to initialize an expree project now we run npm i express {
packagelock.json>>unchages file that has development data

node js is non blocking >>calbacks ,asynchronous programming {
how do we use node js in express js >>this handles rotuing 


}
}
}
when you want a downloaded module you require it 
 */

const express = require("express");
const path = require("path");
const app = express(); // will be access by invoking the name app >>when defining paths 

// middlewares >> software that acts as a bridge and enable us to integrate applications with operating systems(distributed system)
app.use(express.static(path.join(__dirname, "public")));// tracks the public folder in the directory 
// create a port 
const port=3000;

// paths in express are in 


// when you are trying to get a file to be read statically we use app.get with a callback function 
// accepting the req headers and response as parameters we send the file using res.sendFile(filename)

// when sending dynamic files to user we use the res.render 
//the views folder contains the dynamic data thaty will be ued in the applicatoin ,to render the 
//dashboards and it should striclty be called views 
//we create dynamic ui with the views using a templating language ,the language is called ejs (embedded jabvascript)
//import the module and install it in your project using nmp i ejs 
/* then set the views engine to use ejs >>the middleware [
    app.set("views",'ejs')
]
after settign this up we render dynamic data using the post and get routes 
retrieving information from database */
//
/* to retrieve information we need to deconsruct the objects/data types that has this information stroed {
    for any informatio to be accessed in the views files they should be accessed in the server.js files 
} */