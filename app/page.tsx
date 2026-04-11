'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Playermain } from '@/components/Playermain';
import { Track } from '@/types/track';

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const response = await fetch('/tracks.json');
        const data = await response.json();
        setTracks(data);
        if (data.length > 0) {
          setCurrentTrack(data[0]);
        }
      } catch (error) {
        console.error('Error fetching tracks:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTracks();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-spotify-green"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden p-0 font-sans">
      <Sidebar 
        tracks={tracks} 
        onSelect={setCurrentTrack} 
        currentTrackId={currentTrack?.id} 
      />
      <Playermain track={currentTrack} />
    </div>
  );
}
