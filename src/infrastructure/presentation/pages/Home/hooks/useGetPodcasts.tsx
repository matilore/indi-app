import { useEffect, useState } from "react";
import { PodcastRepository, Podcast } from "@/domain/interfaces";
import { getLocalStorageData, setLocalStorageData } from "../utils";

export const useGetPodcasts = (
  getPodcastsResponse: (repository: PodcastRepository) => Promise<Podcast[]>,
  podcastRepository: PodcastRepository
) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const getPodcasts = async () => {
      const podcastList = await getPodcastsResponse(podcastRepository);
      setLocalStorageData(podcastList);
      setPodcasts(podcastList);
    };

    const storedData = getLocalStorageData();

    if (!storedData) {
      getPodcasts();
    } else {
      setPodcasts(storedData);
    }
  }, []);

  return { podcasts };
};
