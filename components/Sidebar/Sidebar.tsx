'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Track } from '@/types/track';
import { Searchbar } from '@/components/Searchbar';
import { Tracklist } from '@/components/Tracklist';
import { LayoutGrid, Library, Search as SearchIcon } from 'lucide-react';

interface SidebarProps {
  tracks: Track[];
  onSelect: (track: Track) => void;
  currentTrackId?: string;
  className?: string;
}

export function Sidebar({ tracks, onSelect, currentTrackId, className }: SidebarProps) {
  const [search, setSearch] = useState('');

  const filteredTracks = tracks.filter(track => 
    track.title.toLowerCase().includes(search.toLowerCase()) || 
    track.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className={cn('w-full md:w-[320px] bg-black flex flex-col p-2 h-full', className)}>
      <div className="bg-spotify-lightBlack rounded-lg p-5 mb-2">
        <div className="flex items-center gap-4 mb-4 text-spotify-lightGrey hover:text-white transition-colors cursor-pointer group">
          <LayoutGrid className="w-6 h-6" />
          <span className="font-bold">Home</span>
        </div>
        <div className="flex items-center gap-4 text-spotify-lightGrey hover:text-white transition-colors cursor-pointer group">
          <SearchIcon className="w-6 h-6" />
          <span className="font-bold">Search</span>
        </div>
      </div>

      <div className="bg-spotify-lightBlack rounded-lg flex-grow flex flex-col p-4 overflow-hidden">
        <div className="flex items-center gap-2 mb-6 text-spotify-lightGrey">
          <Library className="w-6 h-6" />
          <h2 className="font-bold text-base">Your Library</h2>
        </div>
        
        <div className="mb-4">
          <Searchbar value={search} onChange={setSearch} />
        </div>

        <div className="flex-grow overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
          <Tracklist 
            tracks={filteredTracks} 
            onSelect={onSelect} 
            currentTrackId={currentTrackId} 
          />
        </div>
      </div>
    </aside>
  );
}
