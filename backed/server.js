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

const express=require("express");
const app=express();//will be access by invoking the name app >>when defining paths 

//middlewares >>software  that acts as abridge and enable us us to intergrate applications with opertating systems(disctirbuted system )
  app.use(express.static("public"))//tracks the public folder in the directory 
//create a port 

//paths in express are in 


//when you are trying to get a file to be read statically we use app.get with a callback function 
// accepting the req headers and response as parameters we send the file using res.sendfile(filename)

//when sending dynamic files to user we use the res.render 

app.get('/',(req,res)=>{
    res.sendFile("index.html")
})

app.get('/cart',(req,res)=>{
    res.sendFile("cart.html")
})





const port=3000
//listeni is the method we iuse to invoke the port 
app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
    
})
//static files to be listened 

