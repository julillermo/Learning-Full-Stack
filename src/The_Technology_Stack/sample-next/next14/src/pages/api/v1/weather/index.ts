import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
  return res
    .status(200)
    .json({ predefinedZipCodes: ["96815", "96814", "96826"] });
}
