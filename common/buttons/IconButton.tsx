import { IconProps, Icons } from '../icons/IconMap';
import { Button, ButtonProps } from './Button';

export const IconButton = (props: IconProps & ButtonProps) => {
  const { children, iconSize, iconType, ...btnProps } = props;
  return (
    <Button {...btnProps}>
      <Icons iconType={iconType} iconSize={iconSize || '1.2rem'} />
      {children}
    </Button>
  );
};
