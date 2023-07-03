import { SearchBar } from ".";
import { render } from "@testing-library/react";
import { SEARCH_BAR_PLACEHOLDER, PODCAST_NUMBER_BADGE_ID } from "./constants";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";

vi.mock("@/infrastructure/api/podcastRepositoryImpl");

describe("SearchBar", () => {
  it("should render an input field with a specific placeholder", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputField = getByPlaceholderText(SEARCH_BAR_PLACEHOLDER);
    expect(inputField).toBeDefined();
  });

  it("should display a badge with the number of filtered podcasts", () => {
    const { getByTestId } = render(<SearchBar />);
    const badge = getByTestId(PODCAST_NUMBER_BADGE_ID);
    expect(badge.textContent).toEqual(MOCKED_RESPONSE.length);
  });
});
