import { vi } from "vitest";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import { getPodcastsResponse } from "./getPodcasts";
vi.mock("@/infrastructure/api/podcastRepositoryImpl");

describe("getPodcastsResponse", () => {
  it("should call getAllPodcasts method of PodcastRepositoryImpl instance", async () => {
    const podcastRepository = new PodcastRepositoryImpl();
    getPodcastsResponse(podcastRepository);
    expect(podcastRepository.getAllPodcasts).toHaveBeenCalledTimes(1);
  });
});
