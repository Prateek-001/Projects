import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>");
})

app.get("/about", (req,res)=>{
    res.send("<h1>About me</h1><p>My name is Prateek</p>")
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact</h1><p>Phone: +917887365255</p>");
})
app.listen(port, ()=>{
    console.log(`Srever has started on port ${port}`);
});