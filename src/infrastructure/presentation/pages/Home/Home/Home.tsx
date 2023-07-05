import { useGetPodcasts, useFilteredPodcasts } from "./hooks";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import { PodcastListAdapter } from "@/presentation/adapters/podcast/podcastListAdapter";
import { PodcastListItem } from "@/presentation/adapters/podcast/contracts";
import {
  PodcastCard,
  PodcastImageWrapper,
  PodcastDetailsWrapper,
  PodcastList,
  PodcastCardLink,
} from "./styledComponents";
import { PodcastCardImage } from "./components";
import { Text } from "@/presentation/styles/components";
import { COLORS } from "@/presentation/styles/constants";
import { SearchBar } from "@/presentation/components/SearchBar";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "@/presentation/layout/Layout";

const podcastRepository = new PodcastRepositoryImpl();

export const Home = () => {
  const { handleNavigation } = useOutletContext<OutletContext>();

  const { podcasts } = useGetPodcasts(
    getPodcastsResponse,
    podcastRepository,
    PodcastListAdapter
  );

  const { filteredPodcasts, setSearchTerm } = useFilteredPodcasts(podcasts);

  return (
    <>
      <SearchBar
        setSearchTerm={setSearchTerm}
        podcastNumber={filteredPodcasts.length}
      />
      <PodcastList>
        {filteredPodcasts.map(({ id, img, title, author }: PodcastListItem) => (
          <PodcastCardLink onClick={handleNavigation(`/podcast/${id}`)}>
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
          </PodcastCardLink>
        ))}
      </PodcastList>
    </>
  );
};
