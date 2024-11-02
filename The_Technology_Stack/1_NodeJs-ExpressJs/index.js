// This can be ran directly via the command line
//  (if you don't have a start script for example)

// Notice that this is using the 'require' syntax, but I believe
//  the book will eventually transition to the 'import syntax"
const express = require("express");

const server = express();
const port = 3000;

// Respond to a GET request on /hello with "Hello World!"
server.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// Turns on the port on localhost:3000/
server.listen(port, () => {
  console.log("Listening on " + port);
});
