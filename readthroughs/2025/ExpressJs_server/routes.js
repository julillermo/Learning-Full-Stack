"use strict";
// * import fetch from "node-fetch";
// According to the internet, you really only need to use
//  node-fetch for older versions of node. Newer versions
//  of node allow you to use JavaScript's fetch API directly
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeWeather = exports.routeAPINames = exports.routeHello = void 0;
// The types are declared in ./custom.d.ts and can automatically be read
//  into the .ts (or .js also I guess) files within the same folder.
const routeHello = () => "Hello World!";
exports.routeHello = routeHello;
const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = await fetch(url);
        data = (await response.json());
    }
    catch (err) {
        return "Error";
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return names;
};
exports.routeAPINames = routeAPINames;
const routeWeather = (query) => ({
    zipcode: query.zipcode,
    weather: "sunny",
    temp: 35,
});
exports.routeWeather = routeWeather;
//# sourceMappingURL=routes.js.map