import { render, screen } from '@testing-library/react';
import Background from '../Background';

describe('Background', () => {
    it('renders a heading element', () => {
    render(<Background />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
});

it('displays "toolhub records" text', () => {
    render(<Background />);
   const headingElement = screen.getByRole('heading');
   expect(headingElement).toHaveTextContent(/Toolhub records/i);
});
});

