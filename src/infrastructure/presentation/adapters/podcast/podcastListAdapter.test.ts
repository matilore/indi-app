import { PodcastListAdapter } from "./podcastListAdapter";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";
describe("PodcastListAdapter", () => {
  it("should convert to JSON format correctly", () => {
    const podcastUi = new PodcastListAdapter(MOCKED_RESPONSE[0]);
    const json = podcastUi.toJSON();

    expect(json).toMatchSnapshot();
  });
});
