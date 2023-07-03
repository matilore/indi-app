import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("should have a main link that redirects to the Home page", () => {
    const { getByRole } = render(<Header />);
    const link = getByRole("link", { name: "Podcasts" });
    expect(link).toBeDefined();
  });
});
