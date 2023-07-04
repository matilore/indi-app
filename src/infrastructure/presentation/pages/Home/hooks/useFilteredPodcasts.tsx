import { useEffect, useState } from "react";
import { PodcastListItem } from "@/presentation/adapters/podcast/contracts";
import { useSearchParams } from "react-router-dom";
import { handleFilterPodcasts } from "../utils";

const SEARCH_QUERY_PARAM = "s";

export const useFilteredPodcasts = (podcasts: PodcastListItem[]) => {
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastListItem[]>(
    []
  );
  const [searchParams] = useSearchParams();
  const term = searchParams.get(SEARCH_QUERY_PARAM) || "";

  useEffect(() => {
    const filteredPodcasts = handleFilterPodcasts(term, podcasts);
    setFilteredPodcasts(filteredPodcasts);
  }, [term]);

  return { filteredPodcasts };
};
