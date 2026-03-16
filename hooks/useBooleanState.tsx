'use client';
import { useCallback, useState } from 'react';

export const useBooleanState = (initialValue?: boolean) => {
  const [state, setState] = useState(initialValue ?? false);

  const toggle = useCallback((to?: boolean) => setState(prev => to ?? !prev), [state]);

  return [state, toggle];
};
