console.log("SIA ACTIVITY 1");
console.log("Node.js project initialization completed successfully.");

const app = require('express');

const server = app();
server.listen(1007, '0.0.0.0', () => {
    console.log("Server is running on port 1007");
});