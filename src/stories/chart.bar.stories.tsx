import { Meta } from '@storybook/nextjs-vite';

import { BarChartComponent } from '../components/charts/chart.bar';

type Story = Meta<typeof BarChartComponent>;

export default {
  component: BarChartComponent,
  title: 'Charts/BarChart',
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
  },
} satisfies Story;

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
  },
} satisfies Story;
