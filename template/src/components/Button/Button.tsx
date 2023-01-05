import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { ComposeStyledProps, DivAttributes } from 'types';

export type ButtonProps = DivAttributes<HTMLButtonElement> & ComposeStyledProps;

const StyledButton = styled.button`
  ${color}
`;

const Button = (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return <StyledButton {...props} ref={ref} />;
};

export default forwardRef(Button);
