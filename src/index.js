// This file handles boot-up of server
require('dotenv').config();

const { app } = require('./server');


app.listen(3000, () => {
    console.log("Server Running");
});

