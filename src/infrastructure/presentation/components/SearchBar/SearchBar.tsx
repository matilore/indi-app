import {
  SearchBarWrapper,
  SearchInput,
  PodcastNumberBadge,
} from "./styledComponents";
import { SEARCH_BAR_PLACEHOLDER, PODCAST_NUMBER_BADGE_ID } from "./constants";

interface ParamObject {
  [key: string]: string;
}

export const SearchBar = ({
  podcastNumber,
  setSearchTerm,
}: {
  podcastNumber: number;
  setSearchTerm: (param: ParamObject) => void;
}) => {
  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    if (searchTerm) setSearchTerm({ s: searchTerm });
  };

  return (
    <SearchBarWrapper>
      <SearchInput
        onChange={handleInputOnChange}
        placeholder={SEARCH_BAR_PLACEHOLDER}
      />
      <PodcastNumberBadge data-testid={PODCAST_NUMBER_BADGE_ID}>
        {podcastNumber}
      </PodcastNumberBadge>
    </SearchBarWrapper>
  );
};
