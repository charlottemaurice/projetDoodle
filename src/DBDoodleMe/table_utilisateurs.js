var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "doodleme",
  database: "dbDoodleMe"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE utilisateur (nomUtilisateur VARCHAR(30), nom VARCHAR(30), prenom VARCHAR(30))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
