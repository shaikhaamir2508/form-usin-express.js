const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");

// const staticPath = path.join(__dirname,'../public/css');
const templatePath = path.join(__dirname,'../template/views')
const partialPath = path.join(__dirname,"../template/partials");

app.set("view engine","hbs");

app.set("views", templatePath);

hbs.registerPartials(partialPath);

// app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("index");
})
app.get("/contactus",(req,res)=>{
    res.render("index");
})


app.get("/gallery",(req,res)=>{
    res.render("index");
});
app.get("/programs",(req,res)=>{
    res.send("index");
});
app.get("*",(req,res)=>{
    res.render("error");
})

app.listen(port,()=>{
    console.log("listenong to port 8000");
})