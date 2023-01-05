import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import {
  TypographyProps,
  typography,
  ColorProps,
  color,
  compose,
} from 'styled-system';
import { DivAttributes } from 'types';

export type TextProps = DivAttributes &
  TypographyProps &
  ColorProps & {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };

const StyledText = styled.span`
  ${compose(color, typography)}
`;

const Text = (
  props: TextProps,
  ref: ForwardedRef<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  >,
) => {
  return <StyledText {...props} ref={ref} />;
};

export default forwardRef(Text);
