
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cart.html"));
})
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "profile.html"));
})

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
    }
];

//listeni is the method we iuse to invoke the port 
app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
    
})
//static files to be listened 

