import { Row } from '../../common/containers/Flex';

interface TopNavBarProps {
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

export const TopNavBar = (props: TopNavBarProps) => {
  const { leftComponent, centerComponent, rightComponent } = props;

  return (
    <Row className="px-4 bg-bg1 border-b sticky top-0 z-40">
      <Row className="navbar m-auto max-w-350 whitespace-nowrap">
        <Row flexX="start">{leftComponent}</Row>
        <Row flexX="center">{centerComponent}</Row>
        <Row flexX="end">{rightComponent}</Row>
      </Row>
    </Row>
  );
};
