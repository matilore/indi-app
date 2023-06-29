import { PodcastRepositoryImpl } from './podcastRepositoryImpl';
import { describe, it, expect, vi } from 'vitest';

describe('PodcastRepositoryImpl', () => {
  it('should have getAllPodcasts function', () => {
    const podcastRepo = new PodcastRepositoryImpl();
    expect(typeof podcastRepo.getAllPodcasts).toBe('function');
  });
});
