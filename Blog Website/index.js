const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const bloggerpost = [
    {id: 1, title : 'Learning JavaScript'},
    {id: 2, title : 'Learn Mern Stack'},
    {id: 3, title: 'Learn Full Stcak'}
];

let isAuthenticated = false;

app.get('/',(req,res)=>{
    res.render('../views/pages/home',{bloggerpost, isAuthenticated});
});

app.get('/pages/:id',(req,res)=>{
    const postId = req.params.id;
    const post = bloggerpost.find((post)=>post.id == postId);

    if(post){
        res.render(`pages/post${post.id}`, {post, isAuthenticated});
    }else{
        res.status(404).render('pages/404');
    }
});

app.get('/login',(req,res)=>{
    res.render('pages/login');
})

app.post('/login',(req,res)=>{
    const{username , password, email, contact} = req.body;
    if(username == "Pratik" && password == 1234 && email == "p@gmail.com" && contact == 123456789)
    {
        isAuthenticated = true;
        res.redirect("/");
    }else{
        res.render("pages/failure");
    }
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});