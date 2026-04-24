import { Row } from '../../common/containers/Flex';

interface TopNavBarProps {
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

export const TopNavBar = (props: TopNavBarProps) => {
  const { leftComponent, centerComponent, rightComponent } = props;

  return (
    <Row className="px-4 border-b sticky top-0 z-40 backdrop-blur-3xl bg-bg1-transparent">
      <Row className="navbar m-auto max-w-350 whitespace-nowrap">
        <Row flexX="start" gap={4}>
          {leftComponent}
        </Row>
        <Row flexX="center" gap={4}>
          {centerComponent}
        </Row>
        <Row flexX="end" gap={4}>
          {rightComponent}
        </Row>
      </Row>
    </Row>
  );
};
