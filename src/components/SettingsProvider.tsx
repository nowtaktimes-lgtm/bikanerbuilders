'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { GlobalSettings } from '@/lib/api';

const SettingsContext = createContext<GlobalSettings | undefined>(undefined);

export function SettingsProvider({ 
  children, 
  settings 
}: { 
  children: ReactNode; 
  settings: GlobalSettings;
}) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
