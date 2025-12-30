export default async function handler(req, res) {
    return res
        .status(200)
        .json({ zipcode: req.query.zipcode, weather: "sunny", temp: 35 });
}
