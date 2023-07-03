import { useGetPodcasts } from "../hooks/useGetPodcasts";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { Podcast } from "@/domain/interfaces";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import {
  PodcastCard,
  PodcastImageWrapper,
  PodcastDetailsWrapper,
  PodcastList,
  MainWrapper,
} from "./styledComponents";
import { PodcastCardImage } from "./components";
import { Text } from "@/presentation/styles/components";
import { COLORS } from "@/presentation/styles/constants";
import { Header } from "@/presentation/components/Header";
import { SearchBar } from "@/presentation/components/SearchBar";
const podcastRepository = new PodcastRepositoryImpl();

export const Home = () => {
  const { podcasts } = useGetPodcasts(getPodcastsResponse, podcastRepository);
  return (
    <MainWrapper>
      <Header />
      <SearchBar podcastNumber={podcasts.length} />
      <PodcastList>
        {podcasts.map((podcast: Podcast) => (
          <PodcastCard
            data-testid={"podcast-card"}
            key={podcast["im:name"].label}
          >
            <PodcastImageWrapper>
              <PodcastCardImage
                src={podcast["im:image"][2].label}
                title={`${podcast.title.label} image`}
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
                color={COLORS.DARK_GREY}
              >{`Author: ${podcast["im:artist"].label}`}</Text>
            </PodcastDetailsWrapper>
          </PodcastCard>
        ))}
      </PodcastList>
    </MainWrapper>
  );
};
