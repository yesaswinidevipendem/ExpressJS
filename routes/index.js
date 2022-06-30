var express = require('express');
var path = require('path');
var router = express.Router();

var mysql=require('../database/db')

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  
 //res.send("<h2>Hello this is  <u>Yesaswini</u></h2>");
//res.sendFile(path.resolve("public/newresume.html"));

//});
//router.get('/login', function(req, res, next){
  //res.sendFile(path.resolve("public/newresume.html"));
//});


// router.get('/contactus', function(req, res, next){
//   res.sendFile(path.resolve("public/contact.html"));
// });

// router.get('/login', function(req, res, next){
//   res.sendFile(path.resolve("public/login.html"));
// })
// router.post('/loginsubmit', function(req, res, next){
//   var output = "user name:"+req.body.n1+"<br>password:"+req.body.pwd
//   res.send(output);
// });

// router.get('/submitted', function(req, res, next){
//      res.sendFile(path.resolve("public/regform.html"));
//    });

// router.post('/submitted', function(req, res, next){
//   var output = "<table border=2px><tr><td>user name:</td><td>"+req.body.name1+"</td></tr><br><tr><td>Branch:</td><td>"+req.body.branch+"</td></tr><br><tr><td>language:</td><td>"+req.body.c+"</td></tr><br><tr><td>Address:</td><td>"+req.body.addr+"</td></tr><br><tr><td>DOB:</td><td>"+req.body.bday+"</td></tr></table>"
//   res.send(output);
// });

// router.get('/', function(req, res,next) {
//   res.render('index', {title: "Embedded Java Script code template"});
// });

// router.get('/fbpost', function(req, res,next) {
//   var posts=[
//     {title:"HBD",message:"Happy Birthday to you"},
//     {title:"Casual", message:"Hello how are you"},
//     {title:"Announcement", message:"Bahubali releasing today"},
//     {title:"Greetings", message:"Good morning"},
//     {title:"Events", message:"Half saree event"}
//   ];
//   res.render('index', {title:"Facebook posts",post:posts});
// });



router.post('/selectqry', function(req, res, next){
  var regno = req.body.regno;
mysql.getConnection((err, connection) => {
if(err) throw err;
connection.query('select * from students_ai where regno='+regno, (err, rows) => {
connection.release(); 
 if(err) throw err;
//  res.render('datadisplay', {title:"Student details", rows:rows});
res.render('datadisplay', {title:"Student details", rows:rows});
 //res.send(rows);
 });
 });


})

router.get('/enterregno', function(req, res, next){
 res.sendFile(path.resolve("public/regno.html"));
});

module.exports = router;

/*router -> url mapping function
 */