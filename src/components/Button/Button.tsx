import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
} from 'react';
import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const StyledButton = styled.button`
  ${color}
  ${({ theme }) => theme.Button}
`;

const Button = (
  buttonAttrs: ButtonProps & ColorProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return <StyledButton {...buttonAttrs} ref={ref}></StyledButton>;
};

export default forwardRef(Button);
