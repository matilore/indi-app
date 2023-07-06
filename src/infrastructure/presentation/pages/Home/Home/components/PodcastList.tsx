import { PodcastListItem } from "@/presentation/adapters/podcast/contracts";
import { Text } from "@/presentation/styles/components";
import { COLORS } from "@/presentation/styles/constants";
import {
  PodcastCard,
  PodcastImageWrapper,
  PodcastDetailsWrapper,
  PodcastListWrapper,
  PodcastCardLink,
} from "../styledComponents";
import { PodcastCardImage } from ".";

export const PodcastList = ({
  podcasts,
  navigate,
}: {
  podcasts: PodcastListItem[];
  navigate: (url: string) => () => void;
}) => {
  return (
    <PodcastListWrapper>
      {podcasts.map(({ id, img, title, author }: PodcastListItem) => (
        <PodcastCardLink onClick={navigate(`/podcast/${id}`)} key={title}>
          <PodcastCard data-testid={"podcast-card"}>
            <PodcastImageWrapper>
              <PodcastCardImage src={img} title={`${title} image`} />
            </PodcastImageWrapper>
            <PodcastDetailsWrapper>
              <Text $ellipsis={true} $textAlign={"center"}>
                {title}
              </Text>
              <Text
                $textAlign={"center"}
                $ellipsis={true}
                fontSize={"small"}
                color={COLORS.DARK_GREY}
              >{`Author: ${author}`}</Text>
            </PodcastDetailsWrapper>
          </PodcastCard>
        </PodcastCardLink>
      ))}
    </PodcastListWrapper>
  );
};
