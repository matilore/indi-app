import { Podcast, PodcastRepository } from "../../../domain/interfaces";
import { vi } from "vitest";
import { MOCKED_RESPONSE } from "../constants";

export class PodcastRepositoryImpl implements PodcastRepository {
  getAllPodcasts: () => Promise<Podcast[]> = vi.fn(async () => {
    return MOCKED_RESPONSE;
  });
}
