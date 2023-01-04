import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react';
import styled from 'styled-components';
import { ColorProps, color } from 'styled-system';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const StyledButton = styled.button<ColorProps>`
  ${color}
`;

const Button = (
  buttonAttrs: ButtonProps & ColorProps & { as?: ElementType },
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return <StyledButton {...buttonAttrs} ref={ref} />;
};

export default forwardRef(Button);
