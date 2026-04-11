'use client';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Searchbar({ value, onChange, className }: SearchbarProps) {
  return (
    <div className={cn('relative group', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-spotify-lightGrey group-focus-within:text-white transition-colors" />
      <input 
        type="text" 
        placeholder="What do you want to listen to?" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#242424] border-none rounded-md py-2.5 pl-10 pr-4 text-sm text-white placeholder-spotify-lightGrey outline-none ring-1 ring-transparent focus:ring-white/10 hover:bg-[#2a2a2a] transition-all"
      />
    </div>
  );
}
