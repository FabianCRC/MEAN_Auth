const express = require('express');
const server = express();

require('./database.js');

server.use(express.json())
server.use('/api', require('./routes/index.js'));


server.listen(3000);

console.log("Server on port", 3000);
