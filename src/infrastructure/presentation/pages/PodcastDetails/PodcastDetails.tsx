import { useEffect } from "react";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";

export const PodcastDetails = () => {
  useEffect(() => {
    const rep = new PodcastRepositoryImpl();
    rep.getPodcastDetails().then((res) => console.log(res));
  });

  return null;
};
