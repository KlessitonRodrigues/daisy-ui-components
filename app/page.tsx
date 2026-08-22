import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Text } from '../src';
import '../src/global.css';

const inter = Inter({ weight: ['500'] });

export const metadata: Metadata = {};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Text tag="h1">HEllO</Text>
      </body>
    </html>
  );
}
