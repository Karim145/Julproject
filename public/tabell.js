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
 var sql = ("CREATE Table Julprojekt"( name VARCHAR(255), year VARCHAR(255));
  con.query(sql,function (err, result){
   if (err) throw err;
   conole.log("Table created");
 }};
}};
