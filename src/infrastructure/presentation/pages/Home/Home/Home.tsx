import { useGetPodcasts } from "./hooks";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import { PodcastListAdapter } from "@/presentation/adapters/podcast/podcastListAdapter";
import { PodcastListItem } from "@/presentation/adapters/podcast/contracts";
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
  const { podcasts } = useGetPodcasts(
    getPodcastsResponse,
    podcastRepository,
    PodcastListAdapter
  );

  return (
    <MainWrapper>
      <Header />
      <SearchBar podcastNumber={podcasts.length} />
      <PodcastList>
        {podcasts.map(({ img, title, author }: PodcastListItem) => (
          <PodcastCard data-testid={"podcast-card"} key={title}>
            <PodcastImageWrapper>
              <PodcastCardImage src={img} title={`${title} image`} />
            </PodcastImageWrapper>
            <PodcastDetailsWrapper>
              <Text ellipsis={true} textAlign={"center"}>
                {title}
              </Text>
              <Text
                textAlign={"center"}
                ellipsis={true}
                fontSize={"small"}
                color={COLORS.DARK_GREY}
              >{`Author: ${author}`}</Text>
            </PodcastDetailsWrapper>
          </PodcastCard>
        ))}
      </PodcastList>
    </MainWrapper>
  );
};
