import type { Meta } from '@storybook/nextjs-vite';

import { NavbarTop } from '../components/navbars/navbar.top';
import '../global.css';

type Story = Meta<typeof NavbarTop>;

const meta = {
  component: NavbarTop,
  title: 'Navbars/NavbarTop',
  tags: ['autodocs'],
} satisfies Story;

export const Default = {
  args: {
    leftComponent: 'Left Component',
    centerComponent: 'Center Component',
    rightComponent: 'Right Component',
  } satisfies Story['args'],
};

export default meta;
