import { Meta } from '@storybook/nextjs-vite';

import { RadialChartComponent } from '../components/charts/chart.radial';
import '../global.css';

type Story = Meta<typeof RadialChartComponent>;

const meta = {
  component: RadialChartComponent,
  title: 'Charts/RadialChart',
  tags: ['autodocs'],
} satisfies Story;

export const Default = {
  args: {
    data: [
      { name: 'Jan', value: 30 },
      { name: 'Feb', value: 20 },
      { name: 'Mar', value: 50 },
      { name: 'Apr', value: 40 },
      { name: 'May', value: 60 },
    ],
    dataField: 'value',
    title: 'Radial Chart Example',
  } satisfies Story['args'],
};

export default meta;
