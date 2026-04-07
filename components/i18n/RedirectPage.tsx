'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

import { getDefaultLanguage, getDefaultTheme, setTheme } from '../../utils/html';

export const RedirectPage = () => {
  useEffect(() => {
    const defaultTheme = getDefaultTheme();
    if (defaultTheme) setTheme(defaultTheme || 'light');
  }, []);

  useEffect(() => {
    const languages = ['en', 'pt'];
    const currentUrl = new URL(window.location.href);
    if (languages.includes(currentUrl.pathname.split('/')[1])) return;
    const defaultLang = getDefaultLanguage();
    if (defaultLang) redirect(`/${defaultLang}${currentUrl.pathname}`);
  }, []);
  return <></>;
};
