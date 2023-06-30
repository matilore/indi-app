import { REACT_APP_API_PODCASTS_URL } from "./constants";
import {
  PodcastRepository,
  Podcast,
  PodcastsApiResponse,
} from "@/domain/interfaces";

export class PodcastRepositoryImpl implements PodcastRepository {
  async getAllPodcasts(): Promise<Podcast[]> {
    const res = await fetch(REACT_APP_API_PODCASTS_URL);
    const response: PodcastsApiResponse = await res.json();
    return response.feed.entry;
  }
}
