import { Podcast } from "@/domain/interfaces";
import { PodcastListItem } from "@/presentation/adapters/podcast/contracts";

export class PodcastListAdapter {
  private podcastFromApi: Podcast;

  constructor(podcastFromApi: Podcast) {
    this.podcastFromApi = podcastFromApi;
  }

  get id() {
    return this.podcastFromApi.id.attributes["im:id"];
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

  toJSON(): PodcastListItem {
    return {
      id: this.id,
      img: this.img,
      title: this.title,
      author: this.author,
    };
  }
}
