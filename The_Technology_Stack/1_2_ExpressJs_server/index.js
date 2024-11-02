// This can be ran directly via the command line
//  (if you don't have a start script for example)

// Notice that this is using the 'require' syntax, but I believe
//  the book will eventually transition to the 'import syntax"
// The below was eventually replaced with the 'import' syntax
// const express = require("express");

import { routeHello, routeAPINames} from "./routes.js"
import express from "express"

const server = express();
const port = 3000;

// Respond to a GET request on /hello with "Hello World!"
server.get("/hello", (req, res) => {
  const response = routeHello(req, res);
  res.send(response);
});

// adding a route
server.get('/api/names', async (req, res) => {
  let response;

  try {
    response = await routeAPINames(req, res);
  } catch (err) {
    console.log(err);
  }

  res.send(response);
})

// Turns on the port on localhost:3000/
server.listen(port, () => {
  console.log("Listening on " + port);
});
