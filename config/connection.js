var mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Einstein!2",
    database: "burgers_db"
});
connection.connect(function(err) {
    if (err) {
    console.error("Error Connecting: " + err.stack);
    return;
}
    console.log("connected as id" + connection.threadId);

});
module.exports = connection;