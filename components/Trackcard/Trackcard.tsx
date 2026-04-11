'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TrackcardProps {
  className?: string;
  children?: React.ReactNode;
}

export function Trackcard({ className, children }: TrackcardProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
