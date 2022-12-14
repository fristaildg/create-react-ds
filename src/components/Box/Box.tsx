import {
  FC,
  PropsWithChildren,
  forwardRef,
  ForwardedRef,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
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
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexProps,
  GridProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  ColorProps,
} from 'styled-system';

type DivAttributes = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type BoxProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexProps &
  GridProps &
  BorderProps &
  PositionProps &
  ShadowProps;

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

const Box = (
  props: PropsWithChildren & DivAttributes & BoxProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return <StyledBox {...props} ref={ref} />;
};

export default forwardRef(Box);
