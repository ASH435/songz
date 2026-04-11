'use client';

import { cn } from '@/lib/utils';
import { Track } from '@/types/track';
import { Play } from 'lucide-react';

interface TracklistProps {
  tracks: Track[];
  onSelect: (track: Track) => void;
  currentTrackId?: string;
  className?: string;
}

export function Tracklist({ tracks, onSelect, currentTrackId, className }: TracklistProps) {
  return (
    <div className={cn('space-y-1 pb-4', className)}>
      {tracks.map((track) => (
        <div 
          key={track.id} 
          onClick={() => onSelect(track)}
          className={cn(
            'flex items-center p-2 rounded-md cursor-pointer transition-all hover:bg-white/10 group',
            currentTrackId === track.id ? 'bg-white/10' : ''
          )}
        >
          <div className="w-12 h-12 bg-spotify-grey rounded shadow-lg flex items-center justify-center mr-4 relative group-hover:bg-opacity-50 transition-all overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
               <Play className="w-6 h-6 fill-white text-white" />
            </div>
            <span className="text-white font-bold opacity-30 text-xs">IMG</span>
          </div>
          <div className="overflow-hidden">
            <div className={cn(
              "text-[0.95rem] font-medium truncate",
              currentTrackId === track.id ? "text-spotify-green" : "text-white"
            )}>
              {track.title}
            </div>
            <div className="text-[0.8rem] text-spotify-lightGrey group-hover:text-white transition-colors truncate">
              {track.artist}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
