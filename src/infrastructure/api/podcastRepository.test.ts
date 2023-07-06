import { PodcastRepositoryImpl } from './podcastRepositoryImpl';
import { describe, it, expect } from 'vitest';

describe('PodcastRepositoryImpl', () => {
  it('should have getAllPodcasts function', () => {
    const podcastRepo = new PodcastRepositoryImpl();
    expect(typeof podcastRepo.getAllPodcasts).toBe('function');
  });
});
