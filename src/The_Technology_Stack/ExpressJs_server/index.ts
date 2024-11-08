// This can be ran directly via the command line (via node/bun/deno, etc.)
//  (if you don't have a start script for example)

// Notice that this is using the 'require' syntax, but I believe
//  the book will eventually transition to the 'import syntax"

// The below was eventually replaced with the 'import' syntax
//  const express = require("express");

// * I think this page is just to specify the endpoints then call
// *  the specified callback function

// The automatic imports without file extensions only works with .ts files?
import { routeHello, routeAPINames, routeWeather } from "./routes";
import express, { Request, Response } from "express";

const server = express();
const port = 3000;

// /hello
// Respond to a GET request on /hello with "Hello World!"
server.get("/hello", (_req: Request, res: Response): void => {
  const response = routeHello();
  res.send(response);
});

// /api/names
// adding a route
server.get(
  "/api/names",
  async (_req: Request, res: Response): Promise<void> => {
    let response: string;

    // I think this checks for errors because it's a foreign API call and
    //  may fail. The local functions are expected to return
    try {
      response = await routeAPINames();
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

// /api/weather/:zipcode
// The colon ":" creates a parameter on the request's `params` object
server.get("/api/weather/:zipcode", (req: Request, res: Response) => {
  const response = routeWeather({
    zipcode: req.params.zipcode, // specified through the api endpoint (link above)
  });
  res.send(response);
});

// Turn on the port on localhost:3000/
server.listen(port, () => {
  console.log("Listening on " + port);
});
