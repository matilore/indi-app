import { useState } from "react";
import { PodcastImage, PodcastImageContainer } from "../styledComponents";
import { ImagePlaceholder } from "@/presentation/styles/components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderIcon from "@/presentation/assets/podcast_placeholder_icon.png";

export const PodcastCardImage = ({
  src,
  title,
}: {
  src: string;
  title: string;
}) => {
  const [loading, setLoading] = useState(true);

  const onComplete = () => {
    setLoading(false);
  };

  return (
    <PodcastImageContainer>
      {loading && <ImagePlaceholder src={placeholderIcon} />}
      <PodcastImage
        as={LazyLoadImage}
        src={src}
        onError={onComplete}
        onLoad={onComplete}
        key={src}
        alt={title}
        aria-label={title}
      />
    </PodcastImageContainer>
  );
};
