const express = require('express');
const app = express();

app.use(express.static('public'));

app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
// app.listen(process.env.PORT || 3000, ()=>{
//     console.log('Application is started');
// });