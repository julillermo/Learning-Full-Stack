import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import * as z from "zod";
import { routeAPINames, routeHello, routeWeather } from "./routes";

const app = new Hono();

app.get("/hello", (c) => {
  return c.text(routeHello());
});

app.get("/api/names", async (c): Promise<Response> => {
  let response = "";
  try {
    response = await routeAPINames();
  } catch (err) {
    console.log(err);
  }
  return c.html(response);
});

app.get(
  "/api/weather/:zipcode",
  zValidator(
    "param",
    z.object({
      zipcode: z.string(),
    })
  ),
  async (c) => {
    const { zipcode } = c.req.valid("param");
    return c.json(routeWeather({ zipcode }));
  }
);

export default {
  port: 3100,
  fetch: app.fetch,
};
