import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers } from "@/grahpql/resolvers";
import { typeDefs } from "@/grahpql/schema";
import dbConnect from "../../../middleware/db-connect";
const server = new ApolloServer({
    resolvers,
    typeDefs,
});
const handler = startServerAndCreateNextHandler(server);
const allowCors = (fn) => async (req, res) => {
    // Limit the allowed requests to POST requests
    res.setHeader("Allow", "POST");
    // Allowing CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
        // Immediately return 200 for any OPTIONS requests
        // CORS patterns use OPTIONS requests as preflight checks
        // Methods other than POST receive the CORS headers in return
        res.status(200).end();
    }
    return await fn(req, res);
};
const connectDB = (fn) => async (req, res) => {
    await dbConnect();
    return await fn(req, res);
};
export default connectDB(allowCors(handler));
