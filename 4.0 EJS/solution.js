import express from "express";

const app = express();
const port = 3000;

app.listen(port,()=>{
  console.log(`Server running on ${port}.`);
})

app.get("/",(req,res)=>{
 const today=new Date("November 23, 2024  :12:00");
 const day = today.getDay();

//  console.log(day); 
let type = "The weekday";
let adv = "It's time to work hard";

if(day === 0 || day === 6){
  type = "The weekend";
  adv = "It's time to have fun";
}

  res.render("solution.ejs",{
    dayType: type,
    advice: adv
  });
});