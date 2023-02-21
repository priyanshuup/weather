const express = require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 2000;

// public static path 
const staticPath = (path.join(__dirname,"../public"))
const template_path = (path.join(__dirname,"../templates/views"))

app.set('view engine','ejs')
app.set('views', template_path)
app.use(express.static(staticPath))


// routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"404 Nahi hai"
    })
})

app.listen(port,()=>{
    console.log(`Port is running at ${port}`)
})