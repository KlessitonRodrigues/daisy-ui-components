'use client';

import { useEffect, useState } from 'react';

import { Button } from '../../common/buttons/Button';
import { Icons } from '../../common/icons/Icons';
import { SwapElements } from '../../common/swap/SwapElements';
import { getDefaultTheme, setDefaultTheme } from '../../utils/html';

export const ThemeSettings = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = getDefaultTheme();
    setIsDark(currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setDefaultTheme(newTheme);
    setIsDark(newTheme === 'dark');
  };

  return (
    <Button size="sm" variant="square" onClick={toggleTheme}>
      <SwapElements
        active={isDark}
        swapEffect="flip"
        onElement={<Icons iconType="sun" iconSize="1.2rem" />}
        offElement={<Icons iconType="moon" iconSize="1.2rem" />}
      />
    </Button>
  );
};
