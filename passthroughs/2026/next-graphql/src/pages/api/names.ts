import { NextApiRequest, NextApiResponse } from "next";

type ResponseItemType = {
  id: string;
  name: string;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse<ResponseItemType[]> | void> {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data: ResponseItemType[];
  try {
    const response = await fetch(url);
    data = (await response.json()) as ResponseItemType[];
  } catch (err) {
    console.log(JSON.stringify(err, null, 2));
    return res.status(500);
  }

  return res.status(200).json(
    data.map((item) => {
      return {
        id: item.id,
        name: item.name,
      };
    })
  );
}
