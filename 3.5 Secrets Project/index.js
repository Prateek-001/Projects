//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import bodyParser from "body-parser";

const _dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;

var userIdVerfid = false;

app.use(bodyParser.urlencoded({extended:true}));

function verifyPassword(req,res,next){
   const password=req.body["password"];
   if(password==="GetMySecret"){
    userIdVerfid=true;
   }
   next();
}

app.use(verifyPassword);

app.get("/",(req,res)=>{
    res.sendFile(_dirname + "/public/index.html");
})

app.post("/check",(req,res)=>{
    if(userIdVerfid){
        res.sendFile(_dirname+"/public/secret.html");
    }
    else{
        res.sendFile(_dirname+"/public/index.html");
    }
})

app.listen(port,()=>{
console.log(`Listening to port: ${port}`);
})















