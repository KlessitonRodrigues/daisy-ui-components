import { Button } from '../../../common/buttons/Button';
import { Card } from '../../../common/cards/Card';
import { Column, Row } from '../../../common/containers/Flex';
import { PageSection } from '../../../common/containers/Section';
import { Text } from '../../../common/text/Text';

interface CardListSectionProps {
  id?: string;
  title: React.ReactNode;
  buttonText?: React.ReactNode;
  features: {
    title: string;
    description: string;
  }[];
}

export const CardListSection = (props: CardListSectionProps) => {
  const { id, title, buttonText, features } = props;

  return (
    <PageSection>
      <Column gap={8} className="w-full items-center">
        <Text
          id={id}
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
    </PageSection>
  );
};
