// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
app.get("/api/timestamp/:date_string?", function (req, res) {
  let userInput = req.params.date_string
  if (userInput == undefined){
    
    // let value = new Date().toISOString().slice(0,10)
    let value = new Date()
    let date = new Date(value)
    let utc = date.toUTCString()
    let unix = date.getTime()
    // res.json({unix:unix,utc:utc,type:"undefined"});
    res.json({unix:unix,utc:utc});
    
  }else if (Number.parseInt(userInput) == userInput){
    
    let value = new Date(userInput * 1).toISOString().slice(0,10)
    let date = new Date(value)
    let utc = date.toUTCString()
    let unix = date.getTime()
    // res.json({unix:unix,utc:utc,type:"timestamp"});
    res.json({unix:unix,utc:utc});
    
   
  }else if (new Date(userInput) != 'Invalid Date'){
    let date = new Date(userInput)
    let utc = date.toUTCString()
    let unix = date.getTime()
  
  // res.json({unix:unix,utc:utc,type:"date"});
    res.json({unix:unix,utc:utc});
    
  }else{
    let date = new Date(userInput)
    let utc = date.toUTCString()
    let unix = date.getTime()
  
  // res.json({unix:unix,utc:utc,type:"date"});
    res.json({unix:unix,utc:utc});
  }
  
  // let date = ''
  // if (value.search('-') < 0){
  // value= req.params.date_string != undefined ? req.params.date_string : new Date().toISOString().slice(0,10)  
  // console.log("val :",value)
  // date = new Date(value) 
  // }
  // else if (value.search('-') < 0){
  // value= req.params.date_string != undefined ? req.params.date_string : new Date().toISOString().slice(0,10)    
  // }
  
  
  // value = new Date(value) != "Invalid Date" ? value : 
  // let date = new Date(value)    //{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
  // date = new Date(date*1)  //{"unix":1450137600000,"utc":"Tue, 15 Dec 2015 00:00:00 GMT"}
  // console.log("params :", req.params.date_string,"  value :",new Date().toISOString().slice(0,10)) 
  // let utc = date.toUTCString()
  // let unix = date.getTime()
  // console.log("convert :",value , value.toString())
  // res.json({unix:unix,utc:utc});
  // res.json({unix:"hello"});
});

// {"unix":1575203916078,"utc":"Sun, 01 Dec 2019 00:00:00 GMT"}

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});