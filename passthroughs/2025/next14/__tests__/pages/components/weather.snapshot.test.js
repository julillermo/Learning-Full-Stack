/**
 * @jest-environment node
 */
import PageComponentWeather from "../../../src/pages/components/weather";
import { act, create } from "react-test-renderer";
describe("PageComponentWeather", () => {
    it("should render correctly", async () => {
        // Write simulated user behavior then
        //    wrap the component's creation into the async `act` fn
        let component;
        // Write a test case that awaits the `create` fn, which
        //    renders the JSX component, generating HTML in a
        //    simulated browser environemnt and store the result
        //    as a variable
        await act(async () => {
            component = await create(<PageComponentWeather></PageComponentWeather>);
        });
        // Use the `toMatchSnapshot` matcher to compare the rendered
        //    component (as JSON string) to the stored reference.
        expect(component.toJSON()).toMatchSnapshot();
    });
    test("clicks the h1 element and updates the state", async () => {
        let component;
        await act(async () => {
            component = await create(<PageComponentWeather></PageComponentWeather>);
            component.root.findByType("h1").props.onClick();
        });
        expect(component.toJSON()).toMatchSnapshot();
    });
});
