// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../../middleware/db-connect";
import { findByZip } from "../../../../../mongoose/weather/services";

type WeatherDetailType = {
  zipcode: string;
  weather: string;
  temp?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
  dbConnect();

  const data = await findByZip(req.query.zipcode as string);
  return res.status(200).json(data);
}
