import { Podcast } from "@/domain/interfaces";
import { PodcastList } from "./contracts";

export class PodcastListAdapter {
  private podcastFromApi: Podcast;

  constructor(podcastFromApi: Podcast) {
    this.podcastFromApi = podcastFromApi;
  }

  get img() {
    return this.podcastFromApi["im:image"][2].label;
  }

  get title() {
    return this.podcastFromApi["im:name"].label;
  }

  get author() {
    return this.podcastFromApi["im:artist"].label;
  }

  toJSON(): PodcastList {
    return {
      img: this.img,
      title: this.title,
      author: this.author,
    };
  }
}
