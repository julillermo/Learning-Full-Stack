export default async function handler(req, res) {
    return res
        .status(200)
        .json({ predefinedZipCodes: ["96815", "96814", "96826"] });
}
