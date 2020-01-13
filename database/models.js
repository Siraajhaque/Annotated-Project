// PURPOSE:
/*
* This is the Model portion of the MVC model.
* Here we define a bunch of functions that will directly interface with the database
* This is for the controller portion of the interface to cause changes in here
*/


// STEP 1: IMPORT YOUR DEFINED DATABASE
// ---------------------------------------------------------------------------------------------------------------------------
/*
* Firstly import in your database!
* We assign our actual database connection to a variable so that we can pass 
* our queries onto it!
*/

const db = require('./index.js');


// STEP 2: Set up the export/functions for our file
// ---------------------------------------------------------------------------------------------------------------------------
/*
* This is the exact same as the controller, but we're just directly exporting it instead.
* For each function within this object, a query is performed to the database

* Ideally there is at least one for each of the CRUD operations.
* If parameters need to be passed in to modify the query, do so by making the
* first parameter an object of parameters.

* ALERT: Database Queries are always asynchronous, so make sure you're passing around callbacks,
* or promises!

* NOTICE: We're calling db.query() to do our queries for us
* The first argument takes a string of the actual query that will be submitted to mysql
* The second argument is a callback function that is called when the operation is finished
* 
*/

module.exports={
  readAll: (callback) => {
    db.query("SELECT * FROM tennis;", (err, result) => {
      if(err) {
        callback(err);
        return;
      }
      callback(null, result);
    });
  },
  // object destructuring 
  addItem: ({name, amount}, callback) => {
    db.query(`INSERT INTO tennis (item_name, amount) VALUES ("${name}", ${amount})`, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  },
}