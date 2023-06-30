import { useEffect, useState } from "react";
import { PodcastRepository, Podcast } from "@/domain/interfaces";

export const useGetPodcasts = (
  getPodcastsResponse: (repository: PodcastRepository) => Promise<Podcast[]>,
  podcastRepository: PodcastRepository
) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const getPodcasts = async () => {
      const podcastList = await getPodcastsResponse(podcastRepository);
      setPodcasts(podcastList);
    };
    getPodcasts();
  });

  return { podcasts };
};
