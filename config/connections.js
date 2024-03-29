// Set up MySQL connection.
const mysql = require('mysql');
let connection;

// working on heroku

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
    host: 'localhost',
    port: 8000,
    user: 'root',
    // NOTE: Be sure to add your MySQL password here!
    password: 'Nightfloat77$',
    database: 'burgers_db',
  });
};

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;