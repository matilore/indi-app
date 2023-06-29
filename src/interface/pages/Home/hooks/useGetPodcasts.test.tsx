
import { renderHook } from '@testing-library/react';
import { getPodcastsResponse } from '../../../../application/useCases/getPodcasts';
import { PodcastRepositoryImpl } from '../../../../infrastructure/api/podcastRepositoryImpl';
import { useGetPodcasts } from './useGetPodcasts';

vi.mock("../../../../infrastructure/api/podcastRepositoryImpl")

describe('useGetPodcasts', () => {

    it('should call getAllPodcasts method of podcastRepository object with initial rendered', async () => {

        const podcastRepository = new PodcastRepositoryImpl()
        renderHook(() => useGetPodcasts(getPodcastsResponse, podcastRepository));
        expect(podcastRepository.getAllPodcasts).toHaveBeenCalled()

    })
})