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
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b3b3b3]" />
      <input 
        type="text" 
        placeholder="Search songs..." 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/10 border border-white/10 rounded-full py-2 pl-10 pr-4 text-white placeholder-[#b3b3b3] outline-none focus:border-[#1db954] transition-colors"
      />
    </div>
  );
}
