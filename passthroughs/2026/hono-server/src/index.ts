import { Hono } from "hono";

const app = new Hono();

app.get("/hello", (c) => {
  return c.text("Hello World!");
});

export default {
  port: 3100,
  fetch: app.fetch,
};
