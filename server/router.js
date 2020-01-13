// PURPOSE:
/*
* We define the subroutes and how they should be handled here.
* I think this is part of the 'C' portion of the MVC model
*
* keep in mind, this the endpoints that this file will handle is modified
* by however, the main server file (index.js) sets up this file
* so if in index.js we do app.use('/router', <this router>) then all the end points
* are basically preceded by a "/router/"
*/

// STEP 1: DEFINE YOUR ROUTER
// ---------------------------------------------------------------------------------------------------------------------------
/*
* Here we're basically importing express, and utilizing it's .Router() function
* this line is functionally the same as these two lines:
* const express = require('express');
* const router = express.Router();
*
* DISCLAMER: I haven't read the documentation for this yet, but this probably just creates a router object
*/
const router = require('express').Router();



// STEP 2: IMPORT THE CONTROLLER
// ---------------------------------------------------------------------------------------------------------------------------
/*
* We have to import our controller here.
* The router acts as an inbetween for the serverfile & the actual controller
* The actual controller will have the functions that call the Model functions that
* will do the database stuff.
*/
const controller = require('controller');


// STEP 3: DEFINE THE ROUTES
// ---------------------------------------------------------------------------------------------------------------------------
/*
* This is where we can actually start defining what happens at each route 
* & how we are to handle them (basically call the functions from the controller)
*
* First we call our router object, defined in step 1.
* now we can call the function that corresponds to the type of request we 
* are going to handle (GET, POST, DELETE, ETC).
* For the most part, the first paramteter is a function that will come from the controller
* the function gets called when that type of request comes in.
*
* E.G. .get(controller.get) when the request comes in for the (localhost:3000/router/) endpoint,
* run this given function from the controller.get
*/

router
  .route('/')
  .get(controller.get)
  .post(controller.post);

/*
* This is a special kind of route!
* Read this page, sections Route Paths & Route Parameters: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

* The ':' route will store whatever you put in that part of the url as a variable
* in this case, because we called ':index', the inputted paramter can later be refered to
* /referenced as req.params.index
*/
router
  .router('/:index')
  .get(controller.get);

// STEP 4: EXPORT THE ROUTER
// ---------------------------------------------------------------------------------------------------------------------------
/*
* At the end, don't forget to export your router.
* This is so we can import and use/set it within the main server file (index.js)
*/

module.exports = router;