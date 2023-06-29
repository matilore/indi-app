import {useEffect} from 'react'
import { PodcastRepository, Podcast } from '../../../../domain/interfaces'


export const useGetPodcasts = (getPodcastsResponse: (repository: PodcastRepository) => Promise<Podcast[]>, podcastRepository: PodcastRepository) => {

    useEffect(() => {


        const getPodcasts = async () => {
            return await getPodcastsResponse(podcastRepository)
        }

        getPodcasts()

    })

}