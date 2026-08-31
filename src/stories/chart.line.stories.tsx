import { Meta } from '@storybook/nextjs-vite';

import { LineChartComponent } from '../components/charts/chart.line';
import '../global.css';

type Story = Meta<typeof LineChartComponent>;

const meta = {
  component: LineChartComponent,
  title: 'Charts/LineChart',
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
    title: 'Line Chart Example',
  } satisfies Story['args'],
};

export default meta;
