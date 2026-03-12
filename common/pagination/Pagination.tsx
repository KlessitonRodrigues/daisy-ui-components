import { Button } from '../buttons/Button';
import { Row } from '../containers/Flex';
import { Icons } from '../icons/IconMap';
import { Text } from '../text/Text';

interface PaginationProps {
  currentPage?: number;
  lastPage?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { currentPage = 1, lastPage = 1, onPageChange } = props;

  return (
    <Row flexX="end" gap={0}>
      <Button
        ghost
        size="sm"
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icons iconType="caretLeft" iconSize="1.2rem" />
      </Button>
      <Button size="sm" color="primary">
        <Text bold>{currentPage}</Text>
      </Button>
      <Button
        ghost
        size="sm"
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        <Icons iconType="caretRight" iconSize="1.2rem" />
      </Button>
      <Button
        ghost
        size="sm"
        onClick={() => onPageChange?.(currentPage + 5)}
        disabled={currentPage + 5 > lastPage}
      >
        <Icons iconType="skipRight" iconSize="1.2rem" />
      </Button>
      <Button
        ghost
        size="sm"
        onClick={() => onPageChange?.(lastPage)}
        disabled={currentPage === lastPage}
      >
        <Icons iconType="caretLineRight" iconSize="1.2rem" />
      </Button>
    </Row>
  );
};
