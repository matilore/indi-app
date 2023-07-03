import { SearchBar } from ".";
import { render } from "@testing-library/react";
import { SEARCH_BAR_PLACEHOLDER, PODCAST_NUMBER_BADGE_ID } from "./constants";

describe("SearchBar", () => {
  it("should render an input field with a specific placeholder", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputField = getByPlaceholderText(SEARCH_BAR_PLACEHOLDER);
    expect(inputField).toBeDefined();
  });

  it("should display a badge with the number of filtered podcasts", () => {
    const { getByTestId } = render(<SearchBar />);
    const badge = getByTestId(PODCAST_NUMBER_BADGE_ID);
    expect(badge).toBeDefined();
  });
});
