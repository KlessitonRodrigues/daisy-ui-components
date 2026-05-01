'use client';

import { useEffect, useState } from 'react';

import { Button } from '../../common/buttons/Button';
import { SwapElements } from '../../common/swap/SwapElements';
import { getDefaultLanguage, setDefaultLanguage } from '../../utils/html';

export const LangSettings = () => {
  const langOptions = ['en', 'pt'] as string[];
  const [currentLanguage, setCurrentLanguage] = useState('');

  useEffect(() => {
    const defaultLanguage = getDefaultLanguage();
    setCurrentLanguage(langOptions.includes(defaultLanguage) ? defaultLanguage : langOptions[0]);
  }, []);

  const toggleLanguage = () => {
    const currentIndex = langOptions.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % langOptions.length;
    setCurrentLanguage(langOptions[nextIndex]);
    setDefaultLanguage(langOptions[nextIndex]);
  };

  const LangBtn = () => <b>{currentLanguage.toUpperCase()}</b>;

  return (
    <Button size="sm" variant="square" onClick={toggleLanguage}>
      {currentLanguage && (
        <SwapElements
          active={currentLanguage === 'pt'}
          swapEffect="flip"
          onElement={<LangBtn />}
          offElement={<LangBtn />}
        />
      )}
    </Button>
  );
};
