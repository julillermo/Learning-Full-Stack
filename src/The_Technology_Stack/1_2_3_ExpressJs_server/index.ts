// This can be ran directly via the command line
//  (if you don't have a start script for example)

// Notice that this is using the 'require' syntax, but I believe
//  the book will eventually transition to the 'import syntax"
// The below was eventually replaced with the 'import' syntax
// const express = require("express");

// The automatic imports without file extensions only works with .ts files?
import { routeHello, routeAPINames, routeWeather } from "./routes";
import express, { Request, Response } from "express";

const server = express();
const port = 3000;

// Respond to a GET request on /hello with "Hello World!"
server.get("/hello", (_req: Request, res: Response): void => {
  const response = routeHello();
  res.send(response);
});

// adding a route
server.get(
  "/api/names",
  async (_req: Request, res: Response): Promise<void> => {
    let response: string;

    try {
      response = await routeAPINames();
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

// The colon ":" creates a parameter on the request's `params` object
server.get("/api/weather/:zipcode", (req: Request, res: Response) => {
  const response = routeWeather({
    zipcode: req.params.zipcode, // specified through the api endpoint
  });
  res.send(response);
});

// Turns on the port on localhost:3000/
server.listen(port, () => {
  console.log("Listening on " + port);
});
