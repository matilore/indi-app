import { Podcast } from "./podcast";

export interface PodcastRepository {
  getAllPodcasts(): Promise<Podcast[]>;
}