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
    <main className={cn('flex-grow p-2 relative h-screen overflow-y-auto', className)}>
      <div className="bg-gradient-to-b from-[#2a2a2a] to-black rounded-lg h-full p-6 md:p-8 flex flex-col relative overflow-hidden">
        {/* Atmosphere Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-spotify-green/20 to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
           <div className="mb-8 flex items-end gap-6 animate-slide-up">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-spotify-grey rounded-lg shadow-2xl flex items-center justify-center shrink-0">
                 <span className="text-white/20 font-black text-4xl">MUSIC</span>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-xs font-bold uppercase tracking-widest text-white">Song</span>
                 <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                    {track ? track.title : 'No Song Selected'}
                 </h1>
                 <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-bold text-white hover:underline cursor-pointer">
                       {track ? track.artist : 'Select a track to play'}
                    </span>
                    <span className="text-white/60">•</span>
                    <span className="text-sm text-white/60">2026</span>
                 </div>
              </div>
           </div>

           <div className="flex-grow flex items-center justify-center p-4">
              <div className="w-full max-w-4xl bg-black/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
                 <Spotifyembed trackId={track?.id} />
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
