// var MongoClient = require('mongodb').MongoClient,format = require('util').format;
// var mongoose = require('mongoose');
// var express = require('express');
// var app = express();
// require('.././model/model.js');


// mongoose.connect('mongodb://127.0.0.1:27017', function(err) {
//   if (err) {   
//       throw err; 
//     }else
//     console.log("Vous êtes bien connecté à la DB");
//     // mongoose.connection.close();
// });

// // var User = mongoose.model("Mask_Shop", blogSchema);


// app.post("/Inscription", (req, res, next) => {

//   if( !req.password|| !req.lastname || !req.username ){ 
//           return res.status(404).send({"Message" : " Tout les champs doivent être remplis"});
//   }
//   else {
//     console.log("Test réussi");
//     var myData = new User(req.body);
//     myData.save()
//       .then(item => {
//         res.send("Name saved to database");
//         console.log('Request Type: ', req.method);
//         mongoose.connection.close();
//         return res.status(200).send({"Message" : "Ok"});
//       })
//       next();
//   }
// });