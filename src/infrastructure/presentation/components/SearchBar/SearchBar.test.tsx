import { SearchBar } from ".";
import { render } from "@testing-library/react";
import { SEARCH_BAR_PLACEHOLDER, PODCAST_NUMBER_BADGE_ID } from "./constants";

describe("SearchBar", () => {
  const FAKE_PODCAST_NUMBER = 100;

  it("should render an input field with a specific placeholder", () => {
    const { getByPlaceholderText } = render(
      <SearchBar podcastNumber={FAKE_PODCAST_NUMBER} />
    );
    const inputField = getByPlaceholderText(SEARCH_BAR_PLACEHOLDER);
    expect(inputField).toBeDefined();
  });

  it("should display a badge with the number of filtered podcasts", () => {
    const { getByTestId } = render(
      <SearchBar podcastNumber={FAKE_PODCAST_NUMBER} />
    );
    const badge = getByTestId(PODCAST_NUMBER_BADGE_ID);
    expect(badge.textContent).toBe(FAKE_PODCAST_NUMBER.toString());
  });
});
