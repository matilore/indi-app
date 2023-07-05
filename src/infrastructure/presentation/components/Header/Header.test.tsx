import { render } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";
import { ROUTES_PATHS } from "@/presentation/config/routesConstants";
import { LINK_TEXT } from "./constants";

describe("Header", () => {
  it("should have a main link defined", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = getByRole("link", { name: LINK_TEXT });

    expect(link).toBeDefined();
  });

  it("should a link navigating to Home", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = getByRole("link", { name: LINK_TEXT });

    const linkHref = link.getAttribute("href");
    expect(linkHref).toBe(ROUTES_PATHS.HOME);
  });

  it("should render a spinner when isPending is true", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header isPending={true} />
      </MemoryRouter>
    );

    const spinner = getByTestId("spinner");

    expect(spinner).toBeDefined();
  });

  it("should not render spinner when isPending is false", () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <Header isPending={false} />
      </MemoryRouter>
    );

    const spinner = queryByTestId("spinner");

    expect(spinner).toBeNull();
  });
});
