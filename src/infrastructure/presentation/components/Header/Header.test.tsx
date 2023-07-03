import { render } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("should have a main link that redirects to the Home page", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = getByRole("link", { name: "Podcasts" });

    expect(link).toBeDefined();
  });
});
