import { Home } from "./Home";
import { render } from "@testing-library/react";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";
import { MemoryRouter } from "react-router-dom";

vi.mock("@/infrastructure/api/podcastRepositoryImpl");

describe("Home", () => {
  it("should display podcast cards", async () => {
    const { findAllByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const podcastCards = await findAllByTestId("podcast-card");
    expect(podcastCards).toHaveLength(MOCKED_RESPONSE.length);
  });

  it("should display podcast card with an image", async () => {
    const { findByRole } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const podcastImage = await findByRole("img", {
      name: `${MOCKED_RESPONSE[0].title.label} image`,
    });
    expect(podcastImage).toBeDefined();
  });

  it("should display podcast card with a title", async () => {
    const { findByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const podcastTitle = await findByText(MOCKED_RESPONSE[0]["im:name"].label);
    expect(podcastTitle).toBeDefined();
  });

  it("should display podcast card with the author", async () => {
    const { findByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const podcastAuthor = await findByText(
      `Author: ${MOCKED_RESPONSE[0]["im:artist"].label}`
    );
    expect(podcastAuthor).toBeDefined();
  });
});
