import { Hono } from "hono";
import { routeAPINames, routeHello } from "./routes";

const app = new Hono();

app.get("/hello", (c) => {
  return c.text(routeHello());
});

app.get("/api/names", async (c) => {
  let response;
  try {
    response = await routeAPINames();
  } catch (err) {
    console.log(err);
  }
  console.log("response:", response);
  return c.html(response);
});

export default {
  port: 3100,
  fetch: app.fetch,
};
