
require('dotenv').config() //challenge 6
let express = require('express');
const res = require('express/lib/response');
let app = express();
//1
//console.log('Hello World')

//2
//app.get("/", (req, res)=> {
//  res.send('Hello Express');
//})

//7 correct code
app.use(function(req, res, next) {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});

//3
app.get("/", (req,res)=> {
res.sendFile(__dirname + '/views/index.html');
});

//4
app.use('/public', express.static(__dirname + '/public'));



//5
//app.get("/json", (req,res)=> {
//res.json({"message": "Hello json"})
//})

//6
// app.get("/json", (req,res)=> {
//     if(process.env["MESSAGE_STYLE"] == 'uppercase'){
//         res.json({"message": "HELLO JSON"})}
//     else (res.json({"message": "Hello json"}))

//})

//7 incorrect code
// app.use((req, res, next)=>{
//   console.log(req.method," ",req.path," ","-"," ",req.ip);
//   next();
// })
// app.use('/public', express.static(__dirname + '/public'));

//8
app.get("/now",(req,res,next)=>{
req.time = new Date().toString();
next();
},
(req,res)=>{res.json({"time": req.time})})

//9 after the url you would need to put anyword/echo to see the word you entered in json
app.get("/:word/echo",(req,res)=>{
  res.json({echo: req.params.word})
})

//10
app.get("/name",(req,res)=>{
  res.json({ name: req.query.first+" "+req.query.last});
})

//11




 module.exports = app;
