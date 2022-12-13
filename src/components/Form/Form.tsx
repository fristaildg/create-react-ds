import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
  forwardRef,
  ForwardedRef,
} from 'react';

export type FormProps = PropsWithChildren &
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const Form = (
  { children, ...formProps }: FormProps,
  ref: ForwardedRef<HTMLFormElement>,
) => {
  return (
    <form {...formProps} ref={ref}>
      {children}
    </form>
  );
};

export default forwardRef(Form);
