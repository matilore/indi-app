import { renderHook, waitFor } from "@testing-library/react";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import { useGetPodcasts } from "./useGetPodcasts";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";
import { LOCAL_STORAGE_ITEM_NAME } from "../constants";
import { Podcast } from "@/domain/interfaces";
import { PodcastListAdapter } from "@/presentation/adapters/podcast/podcastListAdapter";

vi.mock("@/infrastructure/api/podcastRepositoryImpl");

const stringifiedMockedResponse = JSON.stringify(MOCKED_RESPONSE);
const MOCKED_EXPECTED_RESPONSE = [
  {
    author: "The Joe Budden Network",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
    title: "The Joe Budden Podcast",
  },
];
describe("useGetPodcasts", () => {
  let podcastRepository: { getAllPodcasts: () => Promise<Podcast[]> };
  beforeEach(() => {
    podcastRepository = new PodcastRepositoryImpl();
  });

  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("should call getAllPodcasts method of podcastRepository if podcasts in local storage is null", async () => {
    const { result } = renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository, PodcastListAdapter)
    );
    await waitFor(() => {
      expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
      expect(result.current.podcasts).toMatchObject(MOCKED_EXPECTED_RESPONSE);
    });
  });

  it("should call getAllPodcasts method of podcastRepository if podcasts in local storage data is not empty and expired ", async () => {
    const fakeNotExpiredDate = Date.now() - 100000;
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAME,
      `{"expirationDate": ${fakeNotExpiredDate}, "data": ${stringifiedMockedResponse}}`
    );
    const { result } = renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository, PodcastListAdapter)
    );

    await waitFor(() => {
      expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
      expect(result.current.podcasts).toMatchObject(MOCKED_EXPECTED_RESPONSE);
    });
  });

  it("should not call getAllPodcasts method of podcastRepository if podcasts in local storage is not empty and not expired", async () => {
    const fakeNotExpiredDate = Date.now() + 100000;
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAME,
      `{"expirationDate": ${fakeNotExpiredDate}, "data": ${stringifiedMockedResponse}}`
    );

    const { result } = renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository, PodcastListAdapter)
    );

    await waitFor(() => {
      expect(podcastRepository.getAllPodcasts).not.toHaveBeenCalled();
      expect(result.current.podcasts).toMatchObject(MOCKED_EXPECTED_RESPONSE);
    });
  });

  it("should return a list of podcasts", async () => {
    const { result } = renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository, PodcastListAdapter)
    );

    await waitFor(() => {
      expect(result.current.podcasts).toEqual(MOCKED_EXPECTED_RESPONSE);
    });
  });

  it("should store the list of podcasts", async () => {
    const spied = vi.spyOn(Storage.prototype, "setItem");
    renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository, PodcastListAdapter)
    );

    await waitFor(() => {
      expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
      expect(spied).toHaveBeenCalled();
    });
  });
});
