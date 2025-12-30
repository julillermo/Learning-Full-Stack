/**
 * @jest-environment node
 */
import dbConnect from "../../middleware/db-connect";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
describe("dbConnect", () => {
    let connection;
    // Gets called to clear the mocks each test case.
    // Otherwise, spies would report information from
    //    previous tests.
    afterEach(async () => {
        jest.clearAllMocks();
        await connection.stop();
        await mongoose.disconnect();
    });
    // Acts a clean up function. I assume this is to keep
    //    the state clean for suceeding tests suites
    afterAll(async () => {
        jest.restoreAllMocks();
    });
    // Essentially we're simply checking whether certain
    //    functions are called within another function call
    // This is kind of listener in websites that call a function
    //    when an event is triggered.
    test("calls MongoMemoryServer.create()", async () => {
        const spy = jest.spyOn(MongoMemoryServer, "create");
        connection = await dbConnect();
        expect(spy).toHaveBeenCalled();
    });
    test("calls mongoose.disconnect()", async () => {
        const spy = jest.spyOn(mongoose, "disconnect");
        connection = await dbConnect();
        expect(spy).toHaveBeenCalled();
    });
    test("calls mongoose.connect()", async () => {
        const spy = jest.spyOn(mongoose, "connect");
        connection = await dbConnect();
        const MONGO_URI = connection.getUri();
        expect(spy).toHaveBeenCalledWith(MONGO_URI, { dbName: "Weather" });
    });
});
