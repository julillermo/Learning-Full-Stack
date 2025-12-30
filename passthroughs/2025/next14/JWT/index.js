import { createHmac } from "node:crypto";
import { Buffer } from "node:buffer";
function base64UrlEncode(data) {
    /**
     * FROM THE NODEJS DOCUMENTATION
     *
     * Buffer
     * `Buffer` objects are used to represent a fixed-length
     * sequence of bytes. Many of Node.js APIs support `Buffer`s
     */
    return Buffer.from(data, "utf-8").toString("base64");
}
const headerObject = {
    typ: "JWT",
    alg: "HS256",
};
const payloadObject = {
    exp: 234133423,
    weather_public_zip: "96815",
    weather_private_type: "GitHub",
};
function createJWT() {
    const base64Header = base64UrlEncode(JSON.stringify(headerObject));
    const base64Payload = base64UrlEncode(JSON.stringify(payloadObject));
    // In production project, the secret shouldn't be directly
    //  stored in the code.
    // Secrets must be protected by placing them in an .env
    //  file that exist separate from the codebase.
    const secret = "17fb5d49e10c05c2b08039806970f1cd";
    const signature = createHmac("sha256", secret)
        .update(`${base64Header}.${base64Payload}`)
        .digest("hex");
    return [base64Header, base64Payload, signature].join(".");
}
console.log(createJWT());
