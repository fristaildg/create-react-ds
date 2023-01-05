import { PropsWithChildren, forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  typography,
  layout,
  flexbox,
  grid,
  border,
  position,
  shadow,
  compose,
} from 'styled-system';
import { ComposeStyledProps, DivAttributes } from 'types';

export type BoxProps = DivAttributes & ComposeStyledProps & PropsWithChildren;

const StyledBox = styled.div`
  ${compose(
    space,
    typography,
    layout,
    flexbox,
    grid,
    border,
    position,
    shadow,
    color,
  )}
`;

const Box = (props: BoxProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <StyledBox {...props} ref={ref} />;
};

export default forwardRef(Box);
