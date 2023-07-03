import { SearchBar } from ".";
import { render } from "@testing-library/react";

describe("SearchBar", () => {
  it("should render an input field with a specific placeholder", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputField = getByPlaceholderText("Filter podcasts...");
    expect(inputField).toBeDefined();
  });

  it("should display a badge with the number of filtered podcasts", () => {
    const { getByTestId } = render(<SearchBar />);
    const badge = getByTestId("badge-podcasts");
    expect(badge).toBeDefined();
  });
});
