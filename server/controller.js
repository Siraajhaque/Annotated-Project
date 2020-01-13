// PURPOSE:
/*
* This is the Controller portion of the (MVC) model!
* Here we define an object of functions that gets called by our routers.
* We do a bit of work involed with processing the req & res
* We will also call functions defined by the Model part, so that we can
* get some stuff from the databases.
*
* The reason we split this into two different files from router
* is because mutliple routes can still use the same functions actually
*/

// STEP 1: Import your model functions
// ---------------------------------------------------------------------------------------------------------------------------
/*
* This is where we import the Model part of our MVC
* This will do the actual work to manipulate the server!
* Separation of concerns stuff basically.
* 
*/
const models = require('../database/models.js');


// STEP 2: Set up the controller
// ---------------------------------------------------------------------------------------------------------------------------
/*
* Controllers is just an object of functions that will be called by the router
* Here we do a lot of the work depending on the request
* Whenever we need to go to the database for information, use the models. functions
* Some things that gets handled here:
        1. set the status code
        2. recieve/retrive data
        3. send data back to user
        4. res.redirect(); the user to different pages
*/

const controllers = {
  getItems: (req, res) => {
    models.readAll((err, data) => {
      if (err) {
        res.status(404).send(err);
        return;
      }
      res.status(200).send(data);
    });
    
    console.log('We got it');
  },
  postItems: (req, res) => {
    models.addItem(req.body, (err) => {
      if (err) {
        res.status(400).send(err);
        return;
      }

      res.status(201).send('Item Added')
    });

    console.log('This is your post request speaking')
  }
};


// STEP 3: EXPORT THE CONTROLLER
// ---------------------------------------------------------------------------------------------------------------------------
/*
* Remeber to export the controller so it may be used by the different routers
*/
modules.exports = controllers;