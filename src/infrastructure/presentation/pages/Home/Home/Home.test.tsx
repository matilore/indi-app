import { Home } from "./Home";
import { render, waitFor } from "@testing-library/react";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";
import { MemoryRouter } from "react-router-dom";
import { PodcastListAdapter } from "@/presentation/adapters/podcast/podcastListAdapter";
import * as hooks from "./hooks";

vi.mock("@/infrastructure/api/podcastRepositoryImpl");

describe("Home", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  const podcast = new PodcastListAdapter(MOCKED_RESPONSE[0]).toJSON();
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
      name: `${podcast.title} image`,
    });
    expect(podcastImage).toBeDefined();
  });

  it("should display podcast card with a title", async () => {
    const { findByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const podcastTitle = await findByText(podcast.title);
    expect(podcastTitle).toBeDefined();
  });

  it("should display podcast card with the author", async () => {
    const { findByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const podcastAuthor = await findByText(`Author: ${podcast.author}`);
    expect(podcastAuthor).toBeDefined();
  });

  it("should invoke both useGetPodcasts and useFilteredPodcasts hooks whith initial render", async () => {
    const spiedGetter = vi.spyOn(hooks, "useGetPodcasts");
    const spiedFilter = vi.spyOn(hooks, "useFilteredPodcasts");
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(spiedGetter).toHaveBeenCalled();
      expect(spiedFilter).toHaveBeenCalled();
    });
  });
});
