'use client';
import { useState } from 'react';

import { HorizontalCarousel } from '../../../common/carousel/HorizontalCarousel';
import { Column, Row } from '../../../common/containers/Flex';
import { Icons } from '../../../common/icons/Icons';
import { Text } from '../../../common/text/Text';

interface HorizontalCarouselProps {
  title?: React.ReactNode;
  items: { title: string; imageSrc: string }[];
}

export const HorizontalCarouselSection = (props: HorizontalCarouselProps) => {
  const { title, items } = props;
  const [selected, setSelected] = useState(0);
  const handleChangeSelected = (index: number) => setSelected(index);

  return (
    <Column className="p-4">
      <Text bold centered tag="h2" size="4xl" className="text-dual-tone text-fg1 mb-8">
        {title}
      </Text>

      <Column flexX="center" gap={4} className="w-full px-4 select-none">
        <HorizontalCarousel
          items={items}
          selected={selected}
          handleChangeSelected={handleChangeSelected}
        />
        <Row flexX="center" responsive="sm" gap={4} className="mt-4">
          <Icons iconType="quote" iconSize="2.8rem" className="inline rotate-180 text-main" />
          <Text bold centered size="lg" className="max-w-2xl">
            {items[selected]?.title}
          </Text>
          <Icons iconType="quote" iconSize="2.8rem" className="inline text-main" />
        </Row>
      </Column>
    </Column>
  );
};
