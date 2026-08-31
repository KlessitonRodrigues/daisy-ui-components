import { Meta } from '@storybook/nextjs-vite';

import { BarChartComponent } from '../components/charts/chart.bar';
import '../global.css';

type Story = Meta<typeof BarChartComponent>;

const meta = {
  component: BarChartComponent,
  title: 'Charts/BarChart',
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
    dataFields: ['value', 'name'],
    xField: 'name',
    title: 'Bar Chart Example',
  } satisfies Story['args'],
};

export const Horizontal = {
  args: {
    data: [
      { name: 'Jan', value: 30 },
      { name: 'Feb', value: 20 },
      { name: 'Mar', value: 50 },
      { name: 'Apr', value: 40 },
      { name: 'May', value: 60 },
    ],
    dataFields: ['value', 'name'],
    yField: 'name',
    title: 'Bar Chart Example',
  } satisfies Story['args'],
};

export default meta;
