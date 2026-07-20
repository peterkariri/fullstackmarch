const express = require("express");
const path = require("path");
const app = express(); // will be access by invoking the name app >>when defining paths 

// middlewares >> software that acts as a bridge and enable us to integrate applications with operating systems(distributed system)
app.use(express.static(path.join(__dirname, "public")));// tracks the public folder in the directory 
// create a port 
const port=3000;
//static files to be listened 
/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cart.html"));
})
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "profile.html"));
})
 */
app.set("view engine",'ejs')//sets the view engine to ejs to render dynamic data 

// Sample product data
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 15000,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000,
        category: "Accessories"
    },
    {
        id: 4,
        name: "Keyboard",
        price: 2500,
        category: "Accessories"
    },
    {
        id: 5,
        name: "Bannis",
        price: 25,
        category: "student"
    }
];
//defining dnamic routes
app.get('/product',(req,res)=>{
   res.render('products',{
    products //once we access the product.ejs file we have access to this producs and we can do javascript 
   })

})
//listeni is the method we iuse to invoke the port 
app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
    
})


