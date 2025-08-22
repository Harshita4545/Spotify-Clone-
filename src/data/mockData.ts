import { Track, Playlist } from '../types';

export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: 200,
    albumArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: 174,
    albumArt: 'https://images.pexels.com/photos/1644924/pexels-photo-1644924.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: '3',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: 178,
    albumArt: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'Stay',
    duration: 141,
    albumArt: 'https://images.pexels.com/photos/1722506/pexels-photo-1722506.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: '5',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: 203,
    albumArt: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: '6',
    title: 'Industry Baby',
    artist: 'Lil Nas X, Jack Harlow',
    album: 'MONTERO',
    duration: 212,
    albumArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'Liked Songs',
    description: 'Your favorite tracks',
    tracks: mockTracks.slice(0, 3),
    coverImage: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    isLiked: true
  },
  {
    id: '2',
    name: 'Chill Vibes',
    description: 'Relaxing music for any time',
    tracks: mockTracks.slice(1, 4),
    coverImage: 'https://images.pexels.com/photos/1644924/pexels-photo-1644924.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Workout Mix',
    description: 'High energy tracks to keep you moving',
    tracks: mockTracks.slice(2, 6),
    coverImage: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  }
];