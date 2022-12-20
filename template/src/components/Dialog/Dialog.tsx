import {
  forwardRef,
  ForwardedRef,
  PropsWithChildren,
  DetailedHTMLProps,
  DialogHTMLAttributes,
} from 'react';

export type DialogProps = PropsWithChildren &
  DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;

const Dialog = (
  { children, ...dialogAttrs }: DialogProps,
  ref: ForwardedRef<HTMLDialogElement>,
) => {
  return (
    <dialog {...dialogAttrs} ref={ref}>
      {children}
    </dialog>
  );
};

export default forwardRef(Dialog);
