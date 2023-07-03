import { Podcast } from "@/domain/interfaces";

export class PodcastListAdapter {
  constructor(podcastFromApi: Podcast) {
    this.podcastFromApi = podcastFromApi;
  }
}
