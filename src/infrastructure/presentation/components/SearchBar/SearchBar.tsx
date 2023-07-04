import {
  SearchBarWrapper,
  SearchInput,
  PodcastNumberBadge,
  SearchBarContentWrapper,
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
    setSearchTerm({ s: searchTerm });
  };

  return (
    <SearchBarWrapper>
      <SearchBarContentWrapper>
        <PodcastNumberBadge data-testid={PODCAST_NUMBER_BADGE_ID}>
          {podcastNumber}
        </PodcastNumberBadge>
        <SearchInput
          onChange={handleInputOnChange}
          placeholder={SEARCH_BAR_PLACEHOLDER}
        />
      </SearchBarContentWrapper>
    </SearchBarWrapper>
  );
};
