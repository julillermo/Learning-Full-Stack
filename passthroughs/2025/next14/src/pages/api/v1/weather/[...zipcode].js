import dbConnect from "../../../../../middleware/db-connect";
import { findByZip } from "../../../../../mongoose/weather/services";
dbConnect();
export default async function handler(req, res) {
    const data = await findByZip(req.query.zipcode);
    return res.status(200).json(data);
}
