import { ImageBox } from '../Image/ImageBox';
import { Button } from '../buttons/Button';
import { Column, Row } from '../containers/Flex';
import { Icons } from '../icons/Icons';

interface HorizontalCarouselProps {
  items: { imageSrc: string }[];
  selected: number;
  handleChangeSelected: (index: number) => void;
}

export const HorizontalCarousel = (props: HorizontalCarouselProps) => {
  const { items, selected, handleChangeSelected } = props;

  return (
    <Row className="relative max-w-5xl border rounded-md shadow-sm p-8" gap={0}>
      {items.map((item, index) => (
        <Column
          key={index}
          style={{
            width: index === selected ? '100%' : '0',
            transition: 'width 0.3s ease-in-out',
            overflow: 'hidden',
          }}
        >
          <ImageBox src={item.imageSrc} alt={`corousel image ${index}`} width={1000} height={450} />
        </Column>
      ))}

      <Button
        size="lg"
        color="primary"
        variant="square"
        className="absolute -left-6 top-1/2 rounded-full"
        onClick={() => handleChangeSelected(selected - 1)}
        disabled={selected === 0}
      >
        <Icons iconType="caretLeft" />
      </Button>
      <Button
        size="lg"
        color="primary"
        variant="square"
        className="absolute -right-6 top-1/2 rounded-full"
        onClick={() => handleChangeSelected(selected + 1)}
        disabled={selected === items.length - 1}
      >
        <Icons iconType="caretRight" />
      </Button>
    </Row>
  );
};
