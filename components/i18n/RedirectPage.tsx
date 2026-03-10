'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

import { getDefaultLanguage } from '../../utils/html';

export const RedirectPage = () => {
  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const lang = getDefaultLanguage();
    redirect(`/${lang}${currentUrl.pathname}`);
  }, []);

  return <></>;
};
