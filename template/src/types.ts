import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  BorderProps,
  ColorProps,
  FlexProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type DivAttributes<T = HTMLDivElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;

export type ComposeStyledProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexProps &
  GridProps &
  BorderProps &
  PositionProps &
  ShadowProps;
