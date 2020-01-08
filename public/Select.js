var mysql =require('mysql');

var con = mysql.createConnection({
  host: "loclhost",
  user: "root",
  password; ""
  database: "Julprojekt",
});

con.conect(function(err){
 if (err) throw err;
 console.log("Connected");
 con.quary = ("Select From Julprojekt" function (err, result, fields){
   if (err) throw err;
   conole.log("Table created");
 }};
}};
