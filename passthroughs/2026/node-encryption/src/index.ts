// The import might have changed since the publication of the book
// https://nodejs.org/docs/latest-v22.x/api/crypto.html#crypto

const { createHmac } = await import("node:crypto");

const base64UrlEncode = (data: string): string => {
  return Buffer.from(data, "utf-8").toString("base64");
};

const headerObject = {
  typ: "JWT",
  alg: "HS256",
};
const payloadObject = {
  exp: 234133423,
  weather_public_zip: "96815",
  weather_private_type: "Github",
};

const createJWT = () => {
  const base64Header = base64UrlEncode(JSON.stringify(headerObject));
  const base64Payload = base64UrlEncode(JSON.stringify(payloadObject));

  const secret = "59c4b48eac7e9ac37c046ba88964870d";

  console.log("encryption variable check", {
    base64Header,
    base64Payload,
    secret,
  });

  const signature: string = createHmac("sha256", secret)
    .update(`${base64Header}.${base64Payload}`)
    .digest("hex");

  return [base64Header, base64Payload, signature].join(".");
};

console.log("createdJWT:", createJWT());
