import { Button } from '../../common/buttons/Button';
import { Card } from '../../common/cards/Card';
import { Column, Row } from '../../common/containers/Flex';
import { Text } from '../../common/text/Text';

interface MiddleSection2Props {
  title: React.ReactNode;
  buttonText?: React.ReactNode;
  features: {
    title: string;
    description: string;
  }[];
}

export const MiddleSection2 = (props: MiddleSection2Props) => {
  const { title, buttonText, features } = props;

  return (
    <Column className="w-full gap-10 p-8">
      <Column gap={8} className="w-full items-center">
        <Text
          bold
          centered
          tag="h2"
          className="text-[2.5rem] [&>span]:text-primary text-fg1 leading-12"
        >
          {title}
        </Text>
        {buttonText && (
          <Button color="primary" size="lg" className="rounded-full my-4">
            {buttonText}
          </Button>
        )}
      </Column>

      <div className="w-full rounded-xl bg-bg3 p-8">
        <Row responsive="lg" gap={8} flexX="center">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-bg1 p-6 w-full max-w-sm hover:bg-bg1">
              <Column flexX="start" gap={3}>
                <Text bold tag="h3" className="text-lg text-fg1">
                  {feature.title}
                </Text>
                <Text size="sm" opacity="60" className="text-fg2">
                  {feature.description}
                </Text>
              </Column>
            </Card>
          ))}
        </Row>
      </div>
    </Column>
  );
};
