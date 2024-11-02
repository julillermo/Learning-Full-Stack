// * import fetch from "node-fetch";
// According to the internet, you really only need to use
//  node-fetch for older versions of node. Newer versions
//  of node allow you to use fetch directly

export const routeHello = () => "Hello World!";

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
    .map((item) => `id: ${item.id}, name: ${item.name}`)
    .join("<br>");

  return names;
};
