import { useEffect, useState } from "react";
import { PodcastRepository, Podcast } from "@/domain/interfaces";
import { getLocalStorageData, setLocalStorageData } from "../../utils";
import { PodcastListAdapter } from "@/presentation/adapters/podcast/podcastListAdapter";
import { PodcastListItem } from "@/presentation/adapters/podcast/contracts";

type PodcastAdapterType = typeof PodcastListAdapter;

export const useGetPodcasts = (
  getPodcastsResponse: (repository: PodcastRepository) => Promise<Podcast[]>,
  podcastRepository: PodcastRepository,
  PodcastListAdapter: PodcastAdapterType
) => {
  const [podcasts, setPodcasts] = useState<PodcastListItem[]>([]);

  const handleSetPodcast = (podcasts: Podcast[]) => {
    const adaptedPodcasts = podcasts.map((podcast) =>
      new PodcastListAdapter(podcast).toJSON()
    );
    setPodcasts(adaptedPodcasts);
  };

  useEffect(() => {
    const getPodcasts = async () => {
      const podcastList = await getPodcastsResponse(podcastRepository);
      setLocalStorageData(podcastList);
      handleSetPodcast(podcastList);
    };

    const storedData = getLocalStorageData();

    if (!storedData) {
      getPodcasts();
    } else {
      handleSetPodcast(storedData);
    }
  }, []);

  return { podcasts };
};
