import { render } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";
import { ROUTES_PATHS } from "@/presentation/config/routesConstants";

describe("Header", () => {
  it("should have a main link defined", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = getByRole("link", { name: "Podcasts" });

    expect(link).toBeDefined();
  });

  it("should a link navigating to Home", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = getByRole("link", { name: "Podcasts" });

    const linkHref = link.getAttribute("href");
    expect(linkHref).toBe(ROUTES_PATHS.HOME);
  });
});
