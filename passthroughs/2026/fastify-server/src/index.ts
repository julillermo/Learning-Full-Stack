//? JULIUS: modified from quick example provided in the fastify docs

// Import the framework and instantiate it
import Fastify from "fastify";
import { routeAPINames, routeHello, routeWeather } from "./routes.js";
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/hello", async function handler(_request, _reply) {
  return routeHello();
});
fastify.get("/api/names", async function handler(_request, _reply): Promise<
  void | string
> {
  let response = "";
  try {
    response = await routeAPINames();
  } catch (err) {
    console.log(err);
  }
  return response;
});

type Params = {
  zipcode: string;
};
fastify.get<{ Params: Params }>(
  "/api/weather/:zipcode",
  async (request, _reply) => {
    const { zipcode } = request.params;
    return routeWeather({ zipcode });
  }
);

// Run the server!
try {
  await fastify.listen({ port: 3101 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
