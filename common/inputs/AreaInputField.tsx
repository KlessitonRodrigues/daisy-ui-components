import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { toCss } from '../../utils/strings';

export interface AreaInputFieldProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  hideCaret?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export const AreaInputField = (props: AreaInputFieldProps) => {
  const {
    className,
    size,
    error,
    placeholder,
    label,
    disabled,
    hideCaret,
    before,
    after,
    inputProps,
  } = props;

  return (
    <fieldset className={'fieldset w-full'}>
      <legend className="fieldset-legend font-normal">{label}</legend>
      <label
        className={twMerge(
          'outline-none w-full',
          toCss(size, `input-${size}`, 'input-md'),
          toCss(error, 'input-error', ''),
          className,
        )}
      >
        {before}
        <textarea
          className={twMerge(
            'textarea outline-none w-full h-full text-base',
            toCss(hideCaret, 'hide-caret focus:text-primary', ''),
          )}
          placeholder={placeholder}
          disabled={disabled}
          {...inputProps}
        />
        {after}
      </label>
      <p className="label text-red">{error}</p>
    </fieldset>
  );
};

/* Tailwind include
    input input-sm input-md input-lg
    input-error
    fieldset fieldset-legend
*/
