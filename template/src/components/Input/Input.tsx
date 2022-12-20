import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react';

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (
  { ...inputAttrs }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return <input {...inputAttrs} ref={ref} />;
};

export default forwardRef(Input);
