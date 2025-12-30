// Our dependency double mimicks the functions and function
//    arguments of the original model. It then amkes it appear
//    that the function promises get resolved
const WeatherModel = {
    create: jest.fn((newData) => Promise.resolve(true)),
    findOne: jest.fn(({ zip: paramZip }) => Promise.resolve(true)),
    updateOne: jest.fn(({ zip: paramZip }, newData) => Promise.resolve(true)),
    deleteOne: jest.fn(({ zip: paramZip }) => Promise.resolve(true)),
};
export default WeatherModel;
