import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
} from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  pseudoClass,
  BorderProps,
  border,
} from 'themed-props';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'ghost' | 'success' | 'warning' | 'danger';
  size?: 'regular' | 'small' | 'large';
};

type StyledProps = ColorProps & SpaceProps & TypographyProps & BorderProps;

const StyledButton = styled.button<StyledProps>`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  ${space}
  ${typography}
  ${color}
  ${border}
  ${pseudoClass}
`;

const Button = (
  { variant = 'primary', size = 'regular', ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const variants = {
    primary: {
      $backgroundColor: 'primary.1',
      $hover: {
        $backgroundColor: 'primary.2',
      },
      $active: {
        $backgroundColor: 'primary.3',
      },
    },
    ghost: {
      $backgroundColor: 'transparent',
      $color: 'text',
      $hover: {
        $backgroundColor: 'background.2',
      },
      $active: {
        $backgroundColor: 'background.3',
      },
    },
    success: {
      $backgroundColor: 'success.1',
      $hover: {
        $backgroundColor: 'success.2',
      },
      $active: {
        $backgroundColor: 'success.3',
      },
    },
    warning: {
      $backgroundColor: 'warning.1',
      $hover: {
        $backgroundColor: 'warning.2',
      },
      $active: {
        $backgroundColor: 'warning.3',
      },
    },
    danger: {
      $backgroundColor: 'danger.1',
      $hover: {
        $backgroundColor: 'danger.2',
      },
      $active: {
        $backgroundColor: 'danger.3',
      },
    },
  };

  const sizes = {
    large: {
      $paddingX: 4,
      $paddingY: 3,
      $fontSize: 3,
    },
    regular: {
      $paddingX: 3,
      $paddingY: 2,
      $fontSize: 2,
    },
    small: {
      $padding: 2,
      $fontSize: 1,
    },
  };

  return (
    <StyledButton
      $border="none"
      $borderRadius="small"
      $fontFamily="inherit"
      $color="white.1"
      $margin={1}
      {...props}
      {...sizes[size]}
      {...variants[variant]}
      ref={ref}
    />
  );
};

export default forwardRef(Button);
