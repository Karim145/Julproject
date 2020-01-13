var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Julprojekt"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Jultabell (name, year) VALUES ?";
  var values = [
    ['Spikmatta', '2009'], ['Surfplatta', '2010'], ['Matkasse', '2011'],

  ];
  con.query(sql, [values], function (err, result){
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
