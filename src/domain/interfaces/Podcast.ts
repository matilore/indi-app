interface Podcast {
    feed: {
      author: {
        name: {
          label: string;
        };
        uri: {
          label: string;
        };
      };
      entry: PodcastEntry[];
    };
  }
  
  interface PodcastEntry {
    "im:name": {
      label: string;
    };
    "im:image": PodcastImage[];
    summary: {
      label: string;
    };
    "im:price": {
      label: string;
      attributes: {
        amount: string;
        currency: string;
      };
    };
    "im:contentType": {
      attributes: {
        term: string;
        label: string;
      };
    };
    rights: {
      label: string;
    };
    title: {
      label: string;
    };
    link: {
      attributes: {
        rel: string;
        type: string;
        href: string;
      };
    };
    id: {
      label: string;
      attributes: {
        "im:id": string;
      };
    };
    "im:artist": {
      label: string;
      attributes?: {
        href: string;
      };
    };
    category: {
      attributes: {
        "im:id": string;
        term: string;
        scheme: string;
        label: string;
      };
    };
    "im:releaseDate": {
      label: string;
      attributes: {
        label: string;
      };
    };
  }
  
  interface PodcastImage {
    label: string;
    attributes: {
      height: string;
    };
  }
  