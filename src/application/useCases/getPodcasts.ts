import { PodcastRepository } from "../../domain/interfaces";

export const getPodcastsResponse = async (
  podcastRepository: PodcastRepository
) => {
  return await podcastRepository.getAllPodcasts();
};
