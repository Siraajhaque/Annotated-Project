// PURPOSE:
/*
* We bind our app react component to the DOM tree on the index.html
*/

// STEP 1: DEFINE YOUR IMPORTS
// ---------------------------------------------------------------------------------------------------------------------------

/*
* React: so that we can do react things basically
* ReactDom: lets us use the ReactDOM function
* App: this is the app that we build out in ./components/
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// STEP 2: BIND TO THE DOM TREE
// ---------------------------------------------------------------------------------------------------------------------------

/*
* Here we connect what we have built in app.jsx into the DOM tree
*/ 

ReactDOM.render(<App></App>, document.getElementById('app'));