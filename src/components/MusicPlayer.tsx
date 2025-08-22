import React from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat,
  Volume2,
  VolumeX,
  Heart,
  PictureInPicture
} from 'lucide-react';
import { Track } from '../types';

interface MusicPlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  isShuffled: boolean;
  isRepeated: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: () => void;
  onRepeat: () => void;
  onVolumeChange: (volume: number) => void;
  onSeek: (time: number) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentTrack,
  isPlaying,
  currentTime,
  volume,
  isShuffled,
  isRepeated,
  onPlayPause,
  onPrevious,
  onNext,
  onShuffle,
  onRepeat,
  onVolumeChange,
  onSeek
}) => {
  if (!currentTrack) {
    return null;
  }

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / currentTrack.duration) * 100;

  return (
    <div className="bg-gray-900 border-t border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Current Track Info */}
        <div className="flex items-center space-x-4 w-1/4">
          <img 
            src={currentTrack.albumArt} 
            alt={currentTrack.album}
            className="w-14 h-14 rounded-md object-cover"
          />
          <div className="min-w-0">
            <div className="text-white text-sm font-medium truncate">
              {currentTrack.title}
            </div>
            <div className="text-gray-400 text-xs truncate hover:text-white hover:underline cursor-pointer">
              {currentTrack.artist}
            </div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Heart size={16} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <PictureInPicture size={16} />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 w-2/5">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onShuffle}
              className={`transition-colors ${
                isShuffled ? 'text-green-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Shuffle size={16} />
            </button>
            <button 
              onClick={onPrevious}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack size={20} />
            </button>
            <button 
              onClick={onPlayPause}
              className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button 
              onClick={onNext}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward size={20} />
            </button>
            <button 
              onClick={onRepeat}
              className={`transition-colors ${
                isRepeated ? 'text-green-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Repeat size={16} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs text-gray-400 w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <div 
              className="flex-1 bg-gray-600 rounded-full h-1 cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                onSeek(Math.floor(percent * currentTrack.duration));
              }}
            >
              <div 
                className="bg-white h-1 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 w-10">
              {formatTime(currentTrack.duration)}
            </span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 w-1/4 justify-end">
          <button className="text-gray-400 hover:text-white transition-colors">
            {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <div className="w-24">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => onVolumeChange(Number(e.target.value))}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;