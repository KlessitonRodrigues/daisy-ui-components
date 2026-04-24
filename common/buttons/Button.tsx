import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'wide' | 'block' | 'square' | 'circle';
  ghost?: boolean;
  outline?: boolean;
  link?: boolean;
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { className, ghost, link, outline, loading, ...btnProps } = props;

  const btnClasses = ['btn rounded-sm'];
  if (ghost) btnClasses.push('btn-ghost');
  if (link) btnClasses.push('btn-link');
  if (outline) btnClasses.push('btn-outline border-base-300 hover:bg-bg2');
  if (props.variant) btnClasses.push(`btn-${props.variant}`);
  btnClasses.push(`btn-${props.color || ''}`);
  btnClasses.push(`btn-${props.size || 'md'}`);

  return (
    <button
      className={twMerge(...btnClasses, className)}
      disabled={loading || props.disabled}
      {...btnProps}
    >
      {loading && <span className="loading loading-spinner loading-xs" />}
      {props.label || props.children}
    </button>
  );
};

/* tailwind include
    btn btn-primary btn-secondary btn-accent btn-neutral btn-info btn-success btn-warning btn-error 
    btn-ghost btn-link
    btn-xs btn-sm btn-md btn-lg
    btn-wide btn-block btn-square btn-circle
*/
