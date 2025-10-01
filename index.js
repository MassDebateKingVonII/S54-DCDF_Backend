// Require/Import the App
const app = require('./src/app.js');
require('dotenv').config();

// Define port number
const PORT = process.env.APP_PORT;

// Make the App listen on port 3000 (or what is defined in the .env file)
app.listen(PORT, ()=> {
    console.log(`Express backend App is listening on ${PORT}`);
});