// PURPOSE:
/*
* We define & setup our server here!
* Here we get all the packages for the server and use them to adjust settings within the server!
* We also setup/define all the routes/routefiles
*/


// STEP 1: DEFINE YOUR IMPORTS
// ---------------------------------------------------------------------------------------------------------------------------

/*
* express: the actual server library that we use
* body-parser: converts the incoming request from req.body into useable code automatically
* cors: Cross Origin Resource Sharing - allows resources from webpage to be requested from a outside origin
*       lets us talk to other people/our computers
* morgan: will log incoming requests and stuff (we don't make much use of this tbh)
*
* path: we don't actually use this into the server, but it is used to join paths together for ease of use
*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const path = require('path');

// STEP 2: CREATE YOUR SERVER
// ---------------------------------------------------------------------------------------------------------------------------

const app = express();

// STEP 3: .use YOUR PACKAGAGES
// ---------------------------------------------------------------------------------------------------------------------------

/*
* app.use() lets us "send" in our packages to the server so that they may be used
* bodyParser.json(): this sets the incoming type request so that bodyParser knows how to handle it
* bodyParser.urlencoded({extended: true}): enables a setting that lets body-parser parse the
*       incoming req.body into additional data types (hence the extended: true). Without this
*       the incoming request will only be converted into strings/arrays (? I think? research more later)
* morgan('dev'): sets the logging type to 'dev' (? not sure exactly what that means)
* cors(): initalizes the cors stuff (? need to research this more)
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

// STEP 4: DEFINE YOUR ROUTES
// ---------------------------------------------------------------------------------------------------------------------------

/*
* Here you define the routes that your server will respond to when requested
* Couple of ways you can do this: 1. Defined 'Catchers', 2. utilize routers
* Defined Catchers: lets us just define the endpoints right here in the file and the request type
* Routers: let us direct the incoming request to be handled in another file, based on which endpoint was defined
*/

// EXAMPLE OF Defined Catchers
app.get('/definedGet', (req, res) => {
  res.send('this get request was handled in /server/index.js!');
});

// EXAMPLE OF Router

// This import can happen in step one, but I'll do it here for easy separation of steps
const router = require('router');
app.use('/router', router);

// this specific one is used to server the user the 'landing/home page'
// **TODO**: follow up with Michael specifically about how to translate this
// this does point to client folder that holdes the bundle.js (transpiled react code) as well as the index.html (actual html code)
app.use('/', express.static(path.join(__dirname, '../client/dist')));



// STEP 5: START YOUR SERVER
// ---------------------------------------------------------------------------------------------------------------------------

/*
* Technically this can be done anywhere. I'll keep it as the last step to ensure that everything else is done before hand
* port: can be any open port on the computer. We have used 3000, 8000, 8080, 3434 before
* app.listen(port#, callback): port# will be the defined port variable up there^.
*       I believe the callback will be run on sucessful server start (? investigate further)
*/

const port = 3000;
app.listen(port, () => console.log(`listening on port: ${port}`));