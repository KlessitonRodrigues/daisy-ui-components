import { Card } from '../../common/cards/Card';
import { Row } from '../../common/containers/Flex';
import { Icons } from '../../common/icons/Icons';
import { Text } from '../../common/text/Text';

interface CurrencyCardProps {
  total: string;
  percentage: number;
  amount: string;
  percentageClassName?: string;
}

export const CurrencyCard = (props: CurrencyCardProps) => {
  const { total, percentage, amount, percentageClassName } = props;

  return (
    <Card className="w-full lg:max-w-70">
      <Row flexX="between">
        <Text bold opacity="70">
          {total}
        </Text>
        <Text bold opacity="70" className={percentageClassName || 'text-green'}>
          + {percentage}%
        </Text>
      </Row>
      <Row flexX="between" className="mt-4">
        <Icons iconType="chart" iconSize="2rem" />
        <Text bold opacity="70" size="3xl" className="text-blue">
          {amount}
        </Text>
      </Row>
    </Card>
  );
};
