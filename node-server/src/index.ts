const express = require('express');
const path = require('path');


// create the app object from express
const app = express();

// set the port
const port = 3001; // will use port from computers environment variables or 3000 if there is none
app.set('port', port);

// allow static content to be served, navigating to url with nothing after / will serve index.html from public
app.use(
  express.static(path.join(__dirname, 'build'))
);

app.listen(port, () => {
  console.log(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
});