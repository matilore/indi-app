import { renderHook, waitFor, act } from "@testing-library/react";
import { getPodcastsResponse } from "@/application/useCases/getPodcasts";
import { PodcastRepositoryImpl } from "@/infrastructure/api/podcastRepositoryImpl";
import { useGetPodcasts } from "./useGetPodcasts";
import { MOCKED_RESPONSE } from "@/infrastructure/api/constants";
import { LOCAL_STORAGE_ITEM_NAME } from "../constants";
import { vi } from "vitest";
vi.mock("@/infrastructure/api/podcastRepositoryImpl");

describe("useGetPodcasts", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("should call getAllPodcasts method of podcastRepository if podcasts in local storage is null", async () => {
    const podcastRepository = new PodcastRepositoryImpl();
    renderHook(() => useGetPodcasts(getPodcastsResponse, podcastRepository));
    expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
  });

  it("should call getAllPodcasts method of podcastRepository if podcasts in local storage data is not empty and expired ", async () => {
    const fakeNotExpiredDate = Date.now() - 100000;
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAME,
      `{"expirationDate": ${fakeNotExpiredDate}, "data": [{"key": "value"}]}`
    );
    const podcastRepository = new PodcastRepositoryImpl();
    renderHook(() => useGetPodcasts(getPodcastsResponse, podcastRepository));
    expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
  });

  it("should not call getAllPodcasts method of podcastRepository if podcasts in local storage is not empty and not expired", async () => {
    const fakeNotExpiredDate = Date.now() + 100000;
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_NAME,
      `{"expirationDate": ${fakeNotExpiredDate}, "data": [{"key": "value"}]}`
    );
    const podcastRepository = new PodcastRepositoryImpl();
    renderHook(() => useGetPodcasts(getPodcastsResponse, podcastRepository));
    expect(podcastRepository.getAllPodcasts).not.toHaveBeenCalled();
  });

  it("should return a list of podcasts", async () => {
    const podcastRepository = new PodcastRepositoryImpl();
    const { result } = renderHook(() =>
      useGetPodcasts(getPodcastsResponse, podcastRepository)
    );

    await waitFor(() => {
      expect(result.current.podcasts).toEqual(MOCKED_RESPONSE);
    });
  });

  it("should store the list of podcasts", async () => {
    const spied = vi.spyOn(Storage.prototype, "setItem");
    const podcastRepository = new PodcastRepositoryImpl();
    renderHook(() => useGetPodcasts(getPodcastsResponse, podcastRepository));

    await waitFor(() => {
      expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
      expect(spied).toHaveBeenCalled();
    });
  });
});
