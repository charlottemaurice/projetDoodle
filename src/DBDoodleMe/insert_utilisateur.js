var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "doodleme",
  database: "dbDoodleMe"
});

function teste(){
  alert(2);
}
function ajouterUtilisateur(nomUtilisateur,nom,prenom){
  window.alert(3);
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO utilisateur (nomUtilisateur, nom, prenom) VALUES ('"+nomUtilisateur+"', '"+nom+"', '"+prenom+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  })
};
