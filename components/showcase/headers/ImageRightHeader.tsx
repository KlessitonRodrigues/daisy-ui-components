import { ImageBox } from '../../../common/Image/ImageBox';
import { Button } from '../../../common/buttons/Button';
import { Column, Row } from '../../../common/containers/Flex';
import { Text } from '../../../common/text/Text';

interface ImageRightHeaderProps {
  imgSrc?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  description2?: React.ReactNode;
  buttonText?: React.ReactNode;
  button2Text?: React.ReactNode;
}

export const ImageRightHeader = (props: ImageRightHeaderProps) => {
  const { imgSrc, ...content } = props;

  return (
    <Row responsive="lg" className="w-full min-h-[80vh] p-8" gap={8}>
      <Column flexX="start" gap={8}>
        <Text bold tag="h2" className="text-[3.5rem] [&>span]:text-primary text-fg1 leading-16">
          {content.title}
        </Text>
        <Text size="2xl" opacity="80">
          {content.description}
        </Text>
        <Row responsive="md" gap={4}>
          <Button outline size="lg">
            {content.buttonText}
          </Button>
          <Button color="primary" size="lg">
            {content.button2Text}
          </Button>
          <Text size="lg" opacity="60" className="ml-4">
            {content.description2}
          </Text>
        </Row>
      </Column>
      <Column className="w-fit min-w-lg">
        <ImageBox height={500} src={imgSrc} alt="Header image" />
      </Column>
    </Row>
  );
};
