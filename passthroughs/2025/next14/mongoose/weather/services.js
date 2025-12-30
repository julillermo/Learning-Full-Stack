import WeatherModel from "./model";
// CREATE
export async function storeDocument(doc) {
    try {
        // since our WeatherModel is an instance of a mongoose model,
        //    we can use mongoose methods from it
        await WeatherModel.create(doc);
    }
    catch {
        return false;
    }
    return true;
}
// READ
export async function findByZip(paramZip) {
    try {
        return await WeatherModel.findOne({ zip: paramZip });
    }
    catch (err) {
        console.log(err);
    }
    return [];
}
// UPDATE
export async function updateByZip(paramZip, newData) {
    try {
        await WeatherModel.updateOne({ zip: paramZip }, newData);
        return true;
    }
    catch (err) {
        console.log(err);
    }
    return false;
}
// DELETE
export async function deleteByZip(paramZip) {
    try {
        await WeatherModel.deleteOne({ zip: paramZip });
        return true;
    }
    catch (err) {
        console.log(err);
    }
    return false;
}
