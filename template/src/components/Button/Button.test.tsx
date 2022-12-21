import React from 'react';
import Button from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('should render', () => {
    render(<Button>test button</Button>);

    expect(screen.getByText('test button')).toBeInTheDocument();
  });
});
