import { renderHook, waitFor } from "@testing-library/react";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import { useGetPodcasts } from "./useGetPodcasts";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";
import { LOCAL_STORAGE_ITEM_NAME } from "../constants";
import { Podcast } from "@/domain/interfaces";

vi.mock("@/infrastructure/api/podcastRepositoryImpl");

const stringifiedMockedResponse = JSON.stringify(MOCKED_RESPONSE);

describe("useGetPodcasts", () => {
  let podcastRepository: { getAllPodcasts: () => Promise<Podcast[]> };
  beforeEach(() => {
    podcastRepository = new PodcastRepositoryImpl();
  });

  afterEach(() => {
    localStorage.clear();
    vi.resetAllMocks();
  });

  it("should call getAllPodcasts method of podcastRepository if podcasts in local storage is null", async () => {
    const { result } = renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository)
    );
    await waitFor(() => {
      expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
      expect(result.current.podcasts).toMatchObject(MOCKED_RESPONSE);
    });
  });

  it("should call getAllPodcasts method of podcastRepository if podcasts in local storage data is not empty and expired ", async () => {
    const fakeNotExpiredDate = Date.now() - 100000;
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAME,
      `{"expirationDate": ${fakeNotExpiredDate}, "data": ${stringifiedMockedResponse}}`
    );
    const { result } = renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository)
    );

    await waitFor(() => {
      expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
      expect(result.current.podcasts).toMatchObject(MOCKED_RESPONSE);
    });
  });

  it("should not call getAllPodcasts method of podcastRepository if podcasts in local storage is not empty and not expired", async () => {
    const fakeNotExpiredDate = Date.now() + 100000;
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAME,
      `{"expirationDate": ${fakeNotExpiredDate}, "data": ${stringifiedMockedResponse}}`
    );

    const { result } = renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository)
    );

    await waitFor(() => {
      expect(podcastRepository.getAllPodcasts).not.toHaveBeenCalled();
      expect(result.current.podcasts).toMatchObject(MOCKED_RESPONSE);
    });
  });

  it("should return a list of podcasts", async () => {
    const { result } = renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository)
    );

    await waitFor(() => {
      expect(result.current.podcasts).toEqual(MOCKED_RESPONSE);
    });
  });

  it("should store the list of podcasts", async () => {
    const spied = vi.spyOn(Storage.prototype, "setItem");
    renderHook(() => useGetPodcasts(getPodcastsResponse, podcastRepository));

    await waitFor(() => {
      expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
      expect(spied).toHaveBeenCalled();
    });
  });
});
