import {
  REACT_APP_API_PODCASTS_URL,
  REACT_APP_API_PODCAST_DETAILS_URL,
} from "./constants";
import {
  PodcastRepository,
  Podcast,
  PodcastsApiResponse,
} from "@/domain/interfaces";

export class PodcastRepositoryImpl implements PodcastRepository {
  async getAllPodcasts(): Promise<Podcast[]> {
    try {
      const res = await fetch(REACT_APP_API_PODCASTS_URL);
      const response: PodcastsApiResponse = await res.json();
      return response.feed.entry;
    } catch (error: unknown) {
      throw new Error(error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getPodcastDetails(): Promise<any> {
    const res = await fetch(
      `https://api.allorigins.win/raw?url=${REACT_APP_API_PODCAST_DETAILS_URL}`
    );
    const response: PodcastsApiResponse = await res.json();
    return response;
  }
}
