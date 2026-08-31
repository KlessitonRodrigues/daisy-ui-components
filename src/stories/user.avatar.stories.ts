import type { Meta } from '@storybook/nextjs-vite';

import { UserInitials } from '../components/users/user.avatar';
import '../global.css';

type Story = Meta<typeof UserInitials>;

const meta = {
  component: UserInitials,
  title: 'Users/UserInitials',
  tags: ['autodocs'],
} satisfies Story;

export const Default = {
  args: {
    name: 'Jane Doe',
  } satisfies Story['args'],
};

export default meta;
