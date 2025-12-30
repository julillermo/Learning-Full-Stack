"use strict";
// This can be ran directly via the command line (via node/bun/deno, etc.)
//  (if you don't have a start script for example)
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Notice that this is using the 'require' syntax, but I believe
//  the book will eventually transition to the 'import syntax"
// The below was eventually replaced with the 'import' syntax
//  const express = require("express");
// * I think this page is just to specify the endpoints then call
// *  the specified callback function
// The automatic imports without file extensions only works with .ts files?
const express_1 = __importStar(require("express"));
var cors = require("cors");
const node_path_1 = __importDefault(require("node:path"));
const routes_1 = require("./routes");
const server = (0, express_1.default)();
const port = 3000;
// /hello
// Respond to a GET request on /hello with "Hello World!"
server.get("/hello", (_req, res) => {
    const response = (0, routes_1.routeHello)();
    res.send(response);
});
// /api/names
// adding a route
server.get("/api/names", async (_req, res) => {
    let response;
    // I think this checks for errors because it's a foreign API call and
    //  may fail. The local functions are expected to return
    try {
        response = await (0, routes_1.routeAPINames)();
        res.send(response);
    }
    catch (err) {
        console.log(err);
    }
});
// /api/weather/:zipcode
// The colon ":" creates a parameter on the request's `params` object
// Note that this may be specific to express. Other server frameworks may
//    do this differently
server.get("/api/weather/:zipcode", (req, res) => {
    const response = (0, routes_1.routeWeather)({
        zipcode: req.params.zipcode, // specified through the api endpoint (link above)
    });
    res.send(response);
});
// /components/weather
server.get("/components/weather", (_req, res) => {
    const filePath = node_path_1.default.join(process.cwd(), "public/weather.html");
    console.log("filePath", filePath);
    res.setHeader("Content-Type", "text/html");
    res.sendFile(filePath);
});
// Turn on the port on localhost:3000/
server.use(cors());
server.listen(port, () => {
    console.log("Listening on " + port);
});
//# sourceMappingURL=index.js.map