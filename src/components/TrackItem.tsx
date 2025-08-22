import React from 'react';
import { Play, Pause, MoreHorizontal } from 'lucide-react';
import { Track } from '../types';

interface TrackItemProps {
  track: Track;
  index: number;
  isPlaying: boolean;
  isCurrentTrack: boolean;
  onPlay: (track: Track) => void;
  onPause: () => void;
}

const TrackItem: React.FC<TrackItemProps> = ({ 
  track, 
  index, 
  isPlaying, 
  isCurrentTrack, 
  onPlay, 
  onPause 
}) => {
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (isCurrentTrack && isPlaying) {
      onPause();
    } else {
      onPlay(track);
    }
  };

  return (
    <div className="group grid grid-cols-[16px_1fr_1fr_1fr_minmax(120px,1fr)] gap-4 px-4 py-2 text-sm rounded-md hover:bg-white hover:bg-opacity-10 transition-colors">
      <div className="flex items-center justify-center">
        {isCurrentTrack && isPlaying ? (
          <button onClick={handlePlayPause} className="text-green-500">
            <Pause size={16} />
          </button>
        ) : (
          <>
            <span className={`group-hover:hidden ${isCurrentTrack ? 'text-green-500' : 'text-gray-400'}`}>
              {index + 1}
            </span>
            <button 
              onClick={handlePlayPause}
              className="hidden group-hover:block text-white hover:scale-105 transition-transform"
            >
              <Play size={16} />
            </button>
          </>
        )}
      </div>
      
      <div className="flex items-center space-x-3">
        <img 
          src={track.albumArt} 
          alt={track.album}
          className="w-10 h-10 rounded-md object-cover"
        />
        <div>
          <div className={`font-medium ${isCurrentTrack ? 'text-green-500' : 'text-white'}`}>
            {track.title}
          </div>
          <div className="text-gray-400">{track.artist}</div>
        </div>
      </div>
      
      <div className="flex items-center text-gray-400 hover:text-white hover:underline cursor-pointer">
        {track.album}
      </div>
      
      <div className="flex items-center text-gray-400">
        {/* Date added would go here */}
        2 days ago
      </div>
      
      <div className="flex items-center justify-between text-gray-400">
        <span>{formatDuration(track.duration)}</span>
        <button className="opacity-0 group-hover:opacity-100 hover:text-white transition-all">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};

export default TrackItem;