export const routeHello = () => "Hello World X!";

type ItemData = { id: string; name: string };

export const routeAPINames = async () => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (err) {
    return err;
  }
  const names = data
    .map((item: ItemData) => `id: ${item.id}, name: ${item.name}`)
    .join("<br>");
  return names;
};
