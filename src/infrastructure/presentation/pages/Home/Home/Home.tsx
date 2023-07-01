import { useGetPodcasts } from "../hooks/useGetPodcasts";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { Podcast } from "@/domain/interfaces";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import { PodcastCard } from "./styledComponents";

const podcastRepository = new PodcastRepositoryImpl();

export const Home = () => {
  const { podcasts } = useGetPodcasts(getPodcastsResponse, podcastRepository);
  return (
    <>
      {podcasts.map((podcast: Podcast) => (
        <PodcastCard data-testid={"podcast-card"}>
          <span>{podcast.title.label}</span>
        </PodcastCard>
      ))}
    </>
  );
};
