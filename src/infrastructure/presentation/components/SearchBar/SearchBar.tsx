import {
  SearchBarWrapper,
  SearchInput,
  PodcastNumberBadge,
} from "./styledComponents";
import { SEARCH_BAR_PLACEHOLDER, PODCAST_NUMBER_BADGE_ID } from "./constants";

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchInput placeholder={SEARCH_BAR_PLACEHOLDER} />
      <PodcastNumberBadge data-testid={PODCAST_NUMBER_BADGE_ID} />
    </SearchBarWrapper>
  );
};
