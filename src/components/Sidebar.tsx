import React from 'react';
import { Home, Search, Library, Plus, Heart, Download } from 'lucide-react';
import { Playlist } from '../types';

interface SidebarProps {
  playlists: Playlist[];
  currentView: string;
  onViewChange: (view: string) => void;
  onPlaylistSelect: (playlistId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ playlists, currentView, onViewChange, onPlaylistSelect }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Your Library', icon: Library }
  ];

  return (
    <div className="w-64 bg-black text-white h-full flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">Spotify</h1>
      </div>

      {/* Main Navigation */}
      <nav className="px-2 mb-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-md transition-colors duration-200 ${
                currentView === item.id
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Icon size={24} className="mr-4" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Create Playlist */}
      <div className="px-2 mb-4">
        <button className="w-full flex items-center px-4 py-3 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
          <Plus size={24} className="mr-4" />
          <span className="font-medium">Create Playlist</span>
        </button>
        <button className="w-full flex items-center px-4 py-3 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
          <Heart size={24} className="mr-4 text-green-500" />
          <span className="font-medium">Liked Songs</span>
        </button>
        <button className="w-full flex items-center px-4 py-3 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200">
          <Download size={24} className="mr-4" />
          <span className="font-medium">Downloaded</span>
        </button>
      </div>

      {/* Playlists */}
      <div className="flex-1 overflow-y-auto px-2">
        <div className="border-t border-gray-700 pt-4">
          {playlists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => onPlaylistSelect(playlist.id)}
              className="w-full text-left px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <div className="truncate font-medium">{playlist.name}</div>
              <div className="text-sm text-gray-500 truncate">{playlist.tracks.length} songs</div>
            </button>
          ))}
        </div>
      </div>

      {/* Install App */}
      <div className="p-6 border-t border-gray-700">
        <button className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
          <Download size={20} className="mr-3" />
          <span className="font-medium">Install App</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;