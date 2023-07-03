import { useGetPodcasts } from "../hooks/useGetPodcasts";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { Podcast } from "@/domain/interfaces";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import {
  PodcastCard,
  PodcastImageWrapper,
  PodcastDetailsWrapper,
  PodcastImage,
  PodcastList,
  MainWrapper,
} from "./styledComponents";
import { Text } from "@/presentation/styles/components";
import { COLORS } from "@/presentation/styles/constants";
const podcastRepository = new PodcastRepositoryImpl();

export const Home = () => {
  const { podcasts } = useGetPodcasts(getPodcastsResponse, podcastRepository);
  return (
    <MainWrapper>
      <PodcastList>
        {podcasts.map((podcast: Podcast) => (
          <PodcastCard data-testid={"podcast-card"}>
            <PodcastImageWrapper>
              <PodcastImage
                src={podcast["im:image"][2].label}
                aria-label={`${podcast.title.label} image`}
              />
            </PodcastImageWrapper>
            <PodcastDetailsWrapper>
              <Text ellipsis={true} textAlign={"center"}>
                {podcast["im:name"].label}
              </Text>
              <Text
                textAlign={"center"}
                ellipsis={true}
                fontSize={"small"}
                color={COLORS.GREY}
              >{`Author: ${podcast["im:artist"].label}`}</Text>
            </PodcastDetailsWrapper>
          </PodcastCard>
        ))}
      </PodcastList>
    </MainWrapper>
  );
};
