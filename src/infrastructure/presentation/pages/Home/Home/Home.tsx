import { useGetPodcasts } from "../hooks/useGetPodcasts";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { Podcast } from "@/domain/interfaces";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import {
  PodcastCard,
  PodcastImageWrapper,
  PodcastDetailsWrapper,
} from "./styledComponents";

const podcastRepository = new PodcastRepositoryImpl();

export const Home = () => {
  const { podcasts } = useGetPodcasts(getPodcastsResponse, podcastRepository);
  return (
    <>
      {podcasts.map((podcast: Podcast) => (
        <PodcastCard data-testid={"podcast-card"}>
          <PodcastImageWrapper>
            <img
              src={podcast["im:image"][0].label}
              aria-label={`${podcast.title.label} image`}
            />
          </PodcastImageWrapper>
          <PodcastDetailsWrapper>
            <span>{podcast.title.label}</span>
            <span>{podcast["im:artist"].label}</span>
          </PodcastDetailsWrapper>
        </PodcastCard>
      ))}
    </>
  );
};
