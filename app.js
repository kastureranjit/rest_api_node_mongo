// Call in installed dependencies
const express = require('express');

//set up express app
const app = express();

// set up port number
const port = 5035;

// set up home home route
app.get('/',(request,respond) => {
    respond.status(200).json({
        message:'Welcome to project API',
    });
});

app.listen(port,(request,respond) => {
    console.log(`Our server is live on ${port}. Yay!`);
});