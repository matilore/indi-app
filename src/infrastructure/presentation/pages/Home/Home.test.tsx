import { Home } from "./Home";
import { render } from "@testing-library/react";
import { PODCAST_NUMBER } from "@/infrastructure/api/constants";

describe("Home", () => {
  it(`should display ${PODCAST_NUMBER} podcast cards`, async () => {
    const { findAllByTestId } = render(<Home />);
    const podcastCards = await findAllByTestId("podcast-card");
    expect(podcastCards.length).toBe(PODCAST_NUMBER);
  });
});
