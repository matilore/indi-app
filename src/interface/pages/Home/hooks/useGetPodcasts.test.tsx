import { renderHook, waitFor } from '@testing-library/react';
import { getPodcastsResponse } from "../../../../application/useCases/getPodcasts";
import { PodcastRepositoryImpl } from "../../../../infrastructure/api/podcastRepositoryImpl";
import { useGetPodcasts } from "./useGetPodcasts";
import { MOCKED_RESPONSE } from "../../../../infrastructure/api/__mocks__/podcastRepositoryImpl";

vi.mock('../../../../infrastructure/api/podcastRepositoryImpl');

describe("useGetPodcasts", () => {
  it('should call getAllPodcasts method of podcastRepository object with initial rendered', async () => {
    const podcastRepository = new PodcastRepositoryImpl();
    renderHook(() => useGetPodcasts(getPodcastsResponse, podcastRepository));
    expect(podcastRepository.getAllPodcasts).toHaveBeenCalled();
  });

  it('should return a list of podcasts', async () => {
    const podcastRepository = new PodcastRepositoryImpl();
    const { result } = renderHook(() => useGetPodcasts(getPodcastsResponse, podcastRepository),
    );

    await waitFor(() => {
      expect(result.current.podcasts).toEqual(MOCKED_RESPONSE);
    });
  });
});
