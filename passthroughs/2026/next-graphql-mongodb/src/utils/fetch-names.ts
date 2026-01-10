export type ResponseItemType = {
  id: string;
  name: string;
};

export const fetchNames = async () => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data: ResponseItemType[] | [] = [];
  let names: ResponseItemType[] | [];
  try {
    const response = await fetch(url);
    data = (await response.json()) as ResponseItemType[];
  } catch (err) {
    console.log(JSON.stringify(err, null, 2));
    names = [];
  }
  names = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  return names;
};
