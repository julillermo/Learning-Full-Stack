export type ResponseItemType = {
  id: string;
  name: string;
};

export const fetchNames = async () => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data: ResponseItemType[] | [] = [];
  let names: ResponseItemType[] | [] = [];
  try {
    const response = await fetch(url);
    data = (await response.json()) as ResponseItemType[];
  } catch (_err: unknown) {
    names = [];
    console.log(_err);
  }
  names = data.map((item) => ({
    id: item.id,
    name: item.name,
  }));

  return names;
};
