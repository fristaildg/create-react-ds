import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { DivAttributes } from '../../types';

export type TextProps = DivAttributes & {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const StyledText = styled.span``;

const Text = (
  props: TextProps,
  ref: ForwardedRef<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  >,
) => {
  return <StyledText color="text" {...props} ref={ref} />;
};

export default forwardRef(Text);
