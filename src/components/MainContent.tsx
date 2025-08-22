import React from 'react';
import { Clock } from 'lucide-react';
import { Track, Playlist } from '../types';
import TrackItem from './TrackItem';

interface MainContentProps {
  currentView: string;
  selectedPlaylist: Playlist | null;
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  onTrackPlay: (track: Track) => void;
  onTrackPause: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  currentView,
  selectedPlaylist,
  tracks,
  currentTrack,
  isPlaying,
  onTrackPlay,
  onTrackPause
}) => {
  const renderContent = () => {
    switch (currentView) {
      case 'search':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-8">Search</h1>
            <div className="max-w-md">
              <input
                type="text"
                placeholder="What do you want to listen to?"
                className="w-full bg-gray-800 text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        );
      
      case 'library':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-8">Your Library</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {/* Recently played cards would go here */}
            </div>
          </div>
        );
      
      default:
        return selectedPlaylist ? (
          <div className="p-8">
            {/* Playlist Header */}
            <div className="flex items-end space-x-6 mb-8">
              <img 
                src={selectedPlaylist.coverImage} 
                alt={selectedPlaylist.name}
                className="w-60 h-60 rounded-lg shadow-2xl object-cover"
              />
              <div>
                <p className="text-sm font-medium text-white uppercase tracking-widest">Playlist</p>
                <h1 className="text-6xl font-bold text-white mb-4">{selectedPlaylist.name}</h1>
                <p className="text-gray-300 mb-2">{selectedPlaylist.description}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="font-medium text-white">Spotify</span>
                  <span className="mx-2">•</span>
                  <span>{selectedPlaylist.tracks.length} songs</span>
                </div>
              </div>
            </div>

            {/* Track List */}
            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-lg">
              {/* Header */}
              <div className="grid grid-cols-[16px_1fr_1fr_1fr_minmax(120px,1fr)] gap-4 px-4 py-3 text-sm text-gray-400 border-b border-white border-opacity-10">
                <div>#</div>
                <div>TITLE</div>
                <div>ALBUM</div>
                <div>DATE ADDED</div>
                <div className="flex justify-center">
                  <Clock size={16} />
                </div>
              </div>

              {/* Tracks */}
              <div className="pb-4">
                {selectedPlaylist.tracks.map((track, index) => (
                  <TrackItem
                    key={track.id}
                    track={track}
                    index={index}
                    isPlaying={isPlaying}
                    isCurrentTrack={currentTrack?.id === track.id}
                    onPlay={onTrackPlay}
                    onPause={onTrackPause}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-8">Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6 text-white">
                <h2 className="text-xl font-bold mb-2">Recently Played</h2>
                <p className="text-purple-100">Jump back in</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-lg p-6 text-white">
                <h2 className="text-xl font-bold mb-2">Made for You</h2>
                <p className="text-green-100">Discover new music</p>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-lg p-6 text-white">
                <h2 className="text-xl font-bold mb-2">Charts</h2>
                <p className="text-red-100">What's trending</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black text-white overflow-y-auto">
      {renderContent()}
    </div>
  );
};

export default MainContent;