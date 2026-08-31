import { Meta } from '@storybook/nextjs-vite';

import { CurrencyCard } from '../components/cards/card.currency';
import '../global.css';

type Story = Meta<typeof CurrencyCard>;

const meta = {
  component: CurrencyCard,
  title: 'Cards/CurrencyCard',
  tags: ['autodocs'],
} satisfies Story;

export const Default = {
  args: {
    total: 'Total Revenue',
    percentage: 12,
    amount: '$12,345',
    percentageClassName: 'text-green',
  } satisfies Story['args'],
};

export default meta;
