import { Home } from "./Home";
import { render } from "@testing-library/react";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";

vi.mock("@/infrastructure/api/podcastRepositoryImpl");

describe("Home", () => {
  it("should display podcast cards", async () => {
    const { findAllByTestId } = render(<Home />);
    const podcastCards = await findAllByTestId("podcast-card");
    expect(podcastCards).toHaveLength(MOCKED_RESPONSE.length);
  });

  it("should display podcast card with an image", async () => {
    const { findByRole } = render(<Home />);
    const podcastImage = await findByRole("img", {
      name: `${MOCKED_RESPONSE[0].title.label} image`,
    });
    expect(podcastImage).toBeDefined();
  });

  it("should display podcast card with a title", async () => {
    const { findByText } = render(<Home />);
    const podcastTitle = await findByText(MOCKED_RESPONSE[0].title.label);
    expect(podcastTitle).toBeDefined();
  });

  it("should display podcast card with the author", async () => {
    const { findByText } = render(<Home />);
    const podcastAuthor = await findByText(
      MOCKED_RESPONSE[0]["im:artist"].label
    );
    expect(podcastAuthor).toBeDefined();
  });
});
