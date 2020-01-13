// PURPOSE:
/*
* Here we define our server, create a connection
* and start the actual connection to a variable that can
* access the database itself. This example uses mysql
*
* This is the storage for all our data! This is the M part of the MVC
* Technically it isn't part of MVC at all, but the Model part does,
* connect & manage the database.
*
* We don't actually create the database here, we just create the connection
* to the database, so that we can manipulate it.
* To create the database, you gotta run "mysql -u user -p <fileschema.sql"
*/

// STEP 1: IMPORT THE SERVER PACKAGE
// ---------------------------------------------------------------------------------------------------------------------------
/*
* This example utilizes mysql as it's database
*/

const mysql = require('mysql')

// STEP 2: ESTABLISH USER INFO & DATABASE NAME
// ---------------------------------------------------------------------------------------------------------------------------
/*
* We have to provide a certain user to sign into mysql.
* We also define the name of the database we will be accessing

* the input parameter to mysql.createConnection() is actually an object
* we fill in the fields for the user info and which database to access
*/

const db = mysql.createConnection({
  user: 'user',
  password: '',
  database: 'ball'
})

// STEP 3: CONNECT db TO THE DATABASE
// ---------------------------------------------------------------------------------------------------------------------------
/*
* This is the actual step that connects the database to the variable db
* it takes an error, first call back function (with only the error)
* so that we can catch for a failed conenction
*/

db.connect(err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Database is online!');
  }
});

// STEP 3: EXPORT THE DATABASE
// ---------------------------------------------------------------------------------------------------------------------------
/*
* Remeber to export the db so it may be used by the different the models function
*/
modules.exports = db;