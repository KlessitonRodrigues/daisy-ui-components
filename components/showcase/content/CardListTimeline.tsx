import { twMerge } from 'tailwind-merge';

import { ImageBox } from '../../../common/Image/ImageBox';
import { Column, Row } from '../../../common/containers/Flex';
import If from '../../../common/containers/If';
import { PageSection } from '../../../common/containers/Section';
import { Text } from '../../../common/text/Text';

interface CardListTimelineProps {
  items: {
    title: string;
    description: string;
    imageSrc: string;
  }[];
}

export const CardListTimeline = (props: CardListTimelineProps) => {
  const { items } = props;

  return (
    <PageSection>
      {items.map((item, index) => {
        return (
          <Row
            key={index}
            gap={8}
            flexX="center"
            responsive="md"
            className={twMerge(
              'border rounded-md p-12 mb-8 max-w-4xl',
              index > 0 && (index % 2 === 0 ? 'line-top-left' : 'line-bottom-right'),
            )}
          >
            <If condition={index % 2 === 0}>
              <ImageBox src={item.imageSrc} alt={item.title} width={300} height={300} />
            </If>
            <Column className="max-w-sm">
              <Text bold tag="h3" size="xl" className="text-fg1">
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </Column>
            <If condition={index % 2 !== 0}>
              <ImageBox src={item.imageSrc} alt={item.title} width={300} height={300} />
            </If>
          </Row>
        );
      })}
    </PageSection>
  );
};
