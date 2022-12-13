import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
} from 'react';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = (
  buttonAttrs: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return <button {...buttonAttrs} ref={ref}></button>;
};

export default forwardRef(Button);
