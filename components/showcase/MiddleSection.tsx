import { ImageBox } from '../../common/Image/ImageBox';
import { Button } from '../../common/buttons/Button';
import { Card } from '../../common/cards/Card';
import { Column, Row } from '../../common/containers/Flex';
import { Text } from '../../common/text/Text';

interface MiddleSectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: React.ReactNode;
  features: {
    title: string;
    description: string;
    imgSrc?: string;
  }[];
}

export const MiddleSection = (props: MiddleSectionProps) => {
  const { title, description, buttonText, features } = props;

  return (
    <Column className="w-full gap-12 p-8">
      <Column gap={8} className="w-full">
        <Text
          bold
          centered
          tag="h2"
          className="text-[2.5rem] [&>span]:text-primary text-fg1 leading-12"
        >
          {title}
        </Text>
        <Text centered size="lg" opacity="70" className="my-4 max-w-2xl">
          {description}
        </Text>
        <Button color="primary" size="lg" className="w-fit rounded-full">
          {buttonText}
        </Button>
      </Column>

      <Row responsive="lg" gap={8} flexX="start">
        {features.map((feature, index) => (
          <Card key={index} className="border p-6 hover:bg-bg2 w-full max-w-120">
            <Column flexX="start" gap={3}>
              <ImageBox height={400} src={feature.imgSrc} alt={feature.title} />
              <Text bold tag="h3" className="text-lg">
                {feature.title}
              </Text>
              <Text size="sm" opacity="70">
                {feature.description}
              </Text>
            </Column>
          </Card>
        ))}
      </Row>
    </Column>
  );
};
