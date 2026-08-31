import type { Meta } from '@storybook/nextjs-vite';

import { NavbarTop } from '../components/navbars/navbar.top';

type Story = Meta<typeof NavbarTop>;

export default {
  component: NavbarTop,
  title: 'Navbars/NavbarTop',
} satisfies Story;

export const Default = {
  args: {
    leftComponent: 'Left Component',
    centerComponent: 'Center Component',
    rightComponent: 'Right Component',
  },
} satisfies Story;
