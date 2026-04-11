'use client';

import { cn } from '@/lib/utils';

interface SpotifyembedProps {
  trackId?: string;
  className?: string;
}

export function Spotifyembed({ trackId, className }: SpotifyembedProps) {
  const embedUrl = trackId 
    ? `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`
    : `https://open.spotify.com/embed/playlist/3QllcmYPOoH2MqwusMEHNn?utm_source=generator&theme=0`;

  return (
    <div className={cn('w-full h-[352px] bg-black/50 flex items-center justify-center', className)}>
      <iframe 
        src={embedUrl}
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        className="w-full h-full border-none"
      />
    </div>
  );
}
