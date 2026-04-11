'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Track } from '@/types/track';
import { Searchbar } from '@/components/Searchbar';
import { Tracklist } from '@/components/Tracklist';

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
    <aside className={cn('w-full md:w-[350px] bg-black/85 backdrop-blur-md border-r border-white/10 flex flex-col p-5 h-full', className)}>
      <div className="mb-5">
        <h2 className="text-2xl font-bold mb-5 text-[#1db954]">Playlist Tracks</h2>
        <Searchbar value={search} onChange={setSearch} />
      </div>
      <div className="flex-grow overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
        <Tracklist 
          tracks={filteredTracks} 
          onSelect={onSelect} 
          currentTrackId={currentTrackId} 
        />
      </div>
    </aside>
  );
}
