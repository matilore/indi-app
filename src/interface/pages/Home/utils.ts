import { Podcast } from "../../../domain/interfaces";

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
  const stringifiedPodcastsData: string | null =
    localStorage.getItem("podcasts");
  if (!stringifiedPodcastsData) return null;
  const res = JSON.parse(stringifiedPodcastsData);
  const isExpired = checkDataExpiration({
    localStorageExpiration: res.expirationDate,
  });
  return !isExpired ? res.data : null;
};

export const setLocalStorageData = (podcasts: Podcast[]) => {};
