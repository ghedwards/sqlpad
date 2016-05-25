//  This is where all the client side js stuff is required so it can be bundled 
//  via Browserify. 
//  All the heavy old-school javascript libraries are exposed as browserify globals
//  because its easy and they don't play well with browserify without some work.
//
//  So far, as a general pattern I've been puting jQuery javascript
//  in smaller files. Then I just require them  here and execute the function to 
//  bind any events and whatever else to the page. 

require('./connection.js')();
require('./connection-admin.js')();
require('./user-admin.js')();
require('./configs.js')();

// used on queries.ejs for reading the query filter form and doing the ajax
require('./query-filter-form.js')();

// All the stuff that happens when viewing/working with a single query happens here
require('./query-editor.js')();

// import the react-router routes
var Routes = require('../routes/routes.jsx');

// import the react-engine's client side booter
var ReactEngineClient = require('react-engine/lib/client');

// boot options
var options = {
  routes: Routes,

  // supply a function that can be called
  // to resolve the file that was rendered.
  viewResolver: function(viewName) {
    return require('../views/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  // boot the app when the DOM is ready
  ReactEngineClient.boot(options);
});