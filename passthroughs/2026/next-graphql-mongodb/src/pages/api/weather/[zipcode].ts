import { NextApiRequest, NextApiResponse } from "next";
import { findByZip } from "../../../../mongoose/weather/services";

type WeatherDetailType = {
  zipcode: string;
  weather: string;
  temp?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse<WeatherDetailType> | void> {
  console.log("req.query", req.query);

  const data = await findByZip(req.query.zipcode as string);
  return res.status(200).json(data);
}
