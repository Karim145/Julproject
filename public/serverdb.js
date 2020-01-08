var mysql =require('mysql');

var con = mysql.createConnection({
  host: "loclhost",
  user: "root",
  password; ""
});

con.conect(function(err){
 if (err) throw err;
 console.log("Connected");
 con.query("CREATE DATABASE Julprojekt", function (err, result){
   if (err) throw err;
   conole.log("Database created");
 }};
}};
