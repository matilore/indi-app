import { Podcast } from "@/domain/interfaces";
import { LOCAL_STORAGE_ITEM_NAME } from "./constants";
import { PodcastListItem } from "@/presentation/adapters/podcast/contracts";

export const setExpirationLocalStorageItem = (hours: number) =>
  new Date().getTime() + hours * 60 * 60 * 1000;

export const checkDataExpiration = ({
  localStorageExpiration,
  currentTime = Date.now(),
}: {
  localStorageExpiration: number;
  currentTime?: number;
}) => {
  return localStorageExpiration < currentTime;
};

export const getLocalStorageData = () => {
  const stringifiedPodcastsData: string | null = localStorage.getItem(
    LOCAL_STORAGE_ITEM_NAME
  );
  if (!stringifiedPodcastsData) return null;
  const res = JSON.parse(stringifiedPodcastsData);
  const isExpired = checkDataExpiration({
    localStorageExpiration: res.expirationDate,
  });
  return !isExpired ? res.data : null;
};

export const setLocalStorageData = (podcasts: Podcast[]) => {
  const localStorageItem = {
    expirationDate: setExpirationLocalStorageItem(24),
    data: podcasts,
  };
  const stringifiedPodcasts = JSON.stringify(localStorageItem);
  localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, stringifiedPodcasts);
};

export const handleFilterPodcasts = (
  searchTerm: string,
  podcastsList: PodcastListItem[]
) => {
  const filteredPodcasts = podcastsList.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      podcast.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredPodcasts;
};
