'use client';

import { cn } from '@/lib/utils';
import { Track } from '@/types/track';
import { Spotifyembed } from '@/components/Spotifyembed';

interface PlayerMainProps {
  track?: Track;
  className?: string;
}

export function Playermain({ track, className }: PlayerMainProps) {
  return (
    <main className={cn('flex-grow p-5 md:p-10 flex items-center justify-center relative', className)}>
      <div className="w-full max-w-[800px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] p-10 text-center shadow-2xl animate-fade-in">
        <div className="mb-[30px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-[10px] bg-gradient-to-r from-white to-[#1db954] bg-clip-text text-transparent">
            {track ? track.title : 'Select a Song'}
          </h1>
          <p className="text-lg md:text-xl text-[#b3b3b3]">
            {track ? track.artist : 'From the Playlist'}
          </p>
        </div>
        <div className="rounded-xl overflow-hidden bg-black/40 shadow-inner">
          <Spotifyembed trackId={track?.id} />
        </div>
      </div>
    </main>
  );
}
