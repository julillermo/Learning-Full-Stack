/**
 * @jest-environment node
 */

describe("The API /v1/weather/[zipcode]", () => {
  test("returns the correct data for teh zipcode 96815", async () => {
    const zip = "96815";
    // this requires the specific app running on 3102
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      cache: "no-store",
    });
    console.log("response check", JSON.stringify(response, null, 2));
    const body = await response.json();
    expect(body.zip).toEqual(zip);
  });
});
