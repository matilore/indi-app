import { routesConfig } from "./routes";

describe("Router", () => {
  test("should create a router with the correct configuration", () => {
    expect(routesConfig).toMatchSnapshot();
  });
});
