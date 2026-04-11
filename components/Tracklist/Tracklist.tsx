'use client';

import { cn } from '@/lib/utils';
import { Track } from '@/types/track';
import { Music } from 'lucide-react';

interface TracklistProps {
  tracks: Track[];
  onSelect: (track: Track) => void;
  currentTrackId?: string;
  className?: string;
}

export function Tracklist({ tracks, onSelect, currentTrackId, className }: TracklistProps) {
  return (
    <div className={cn('space-y-1', className)}>
      {tracks.map((track) => (
        <div 
          key={track.id} 
          onClick={() => onSelect(track)}
          className={cn(
            'flex items-center p-2.5 rounded-lg cursor-pointer transition-all hover:bg-white/5 group',
            currentTrackId === track.id ? 'bg-[#1db954]/15 border border-[#1db954]/30' : ''
          )}
        >
          <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mr-3.5 group-hover:bg-white/10 transition-colors">
            <Music className="w-4 h-4" />
          </div>
          <div className="overflow-hidden">
            <div className="text-[0.95rem] font-semibold truncate">{track.title}</div>
            <div className="text-[0.8rem] text-[#b3b3b3]">{track.artist}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
