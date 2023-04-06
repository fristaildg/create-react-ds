import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivAttributes<T = HTMLDivElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;
