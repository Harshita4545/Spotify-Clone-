import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MusicPlayer from './components/MusicPlayer';
import { Track, Playlist, PlayerState } from './types';
import { mockTracks, mockPlaylists } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
    volume: 75,
    isShuffled: false,
    isRepeated: false,
    queue: [],
    currentIndex: 0
  });

  // Auto-increment current time when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (playerState.isPlaying && playerState.currentTrack) {
      interval = setInterval(() => {
        setPlayerState(prev => {
          if (prev.currentTime >= (prev.currentTrack?.duration || 0)) {
            // Auto-play next track
            handleNext();
            return prev;
          }
          return {
            ...prev,
            currentTime: prev.currentTime + 1
          };
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [playerState.isPlaying, playerState.currentTrack]);

  const selectedPlaylist = selectedPlaylistId 
    ? mockPlaylists.find(p => p.id === selectedPlaylistId) || null
    : null;

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    if (view !== 'playlist') {
      setSelectedPlaylistId(null);
    }
  };

  const handlePlaylistSelect = (playlistId: string) => {
    setSelectedPlaylistId(playlistId);
    setCurrentView('playlist');
  };

  const handleTrackPlay = (track: Track) => {
    const playlist = selectedPlaylist || { tracks: mockTracks };
    const trackIndex = playlist.tracks.findIndex(t => t.id === track.id);
    
    setPlayerState(prev => ({
      ...prev,
      currentTrack: track,
      isPlaying: true,
      currentTime: 0,
      queue: playlist.tracks,
      currentIndex: trackIndex
    }));
  };

  const handleTrackPause = () => {
    setPlayerState(prev => ({
      ...prev,
      isPlaying: false
    }));
  };

  const handlePlayPause = () => {
    setPlayerState(prev => ({
      ...prev,
      isPlaying: !prev.isPlaying
    }));
  };

  const handleNext = () => {
    setPlayerState(prev => {
      const nextIndex = prev.isShuffled 
        ? Math.floor(Math.random() * prev.queue.length)
        : (prev.currentIndex + 1) % prev.queue.length;
      
      const nextTrack = prev.queue[nextIndex];
      
      return {
        ...prev,
        currentTrack: nextTrack,
        currentIndex: nextIndex,
        currentTime: 0,
        isPlaying: true
      };
    });
  };

  const handlePrevious = () => {
    setPlayerState(prev => {
      const prevIndex = prev.currentIndex === 0 
        ? prev.queue.length - 1 
        : prev.currentIndex - 1;
      
      const prevTrack = prev.queue[prevIndex];
      
      return {
        ...prev,
        currentTrack: prevTrack,
        currentIndex: prevIndex,
        currentTime: 0,
        isPlaying: true
      };
    });
  };

  const handleShuffle = () => {
    setPlayerState(prev => ({
      ...prev,
      isShuffled: !prev.isShuffled
    }));
  };

  const handleRepeat = () => {
    setPlayerState(prev => ({
      ...prev,
      isRepeated: !prev.isRepeated
    }));
  };

  const handleVolumeChange = (volume: number) => {
    setPlayerState(prev => ({
      ...prev,
      volume
    }));
  };

  const handleSeek = (time: number) => {
    setPlayerState(prev => ({
      ...prev,
      currentTime: time
    }));
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          playlists={mockPlaylists}
          currentView={currentView}
          onViewChange={handleViewChange}
          onPlaylistSelect={handlePlaylistSelect}
        />
        <MainContent
          currentView={currentView}
          selectedPlaylist={selectedPlaylist}
          tracks={mockTracks}
          currentTrack={playerState.currentTrack}
          isPlaying={playerState.isPlaying}
          onTrackPlay={handleTrackPlay}
          onTrackPause={handleTrackPause}
        />
      </div>
      <MusicPlayer
        currentTrack={playerState.currentTrack}
        isPlaying={playerState.isPlaying}
        currentTime={playerState.currentTime}
        volume={playerState.volume}
        isShuffled={playerState.isShuffled}
        isRepeated={playerState.isRepeated}
        onPlayPause={handlePlayPause}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onShuffle={handleShuffle}
        onRepeat={handleRepeat}
        onVolumeChange={handleVolumeChange}
        onSeek={handleSeek}
      />
    </div>
  );
}

export default App;