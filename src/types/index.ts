export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  albumArt: string;
  audioUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  tracks: Track[];
  coverImage: string;
  isLiked?: boolean;
}

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  isShuffled: boolean;
  isRepeated: boolean;
  queue: Track[];
  currentIndex: number;
}