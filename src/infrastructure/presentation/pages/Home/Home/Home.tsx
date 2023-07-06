import { useGetPodcasts, useFilteredPodcasts } from "./hooks";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import { PodcastListAdapter } from "@/presentation/adapters/podcast/podcastListAdapter";
import { SearchBar } from "@/presentation/components/SearchBar";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "@/presentation/layout/Layout";
import { PodcastList } from "./components";

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
      <PodcastList podcasts={filteredPodcasts} navigate={handleNavigation} />
    </>
  );
};
