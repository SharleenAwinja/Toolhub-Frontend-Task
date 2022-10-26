import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

it('should render same text passed into title prop', () => {
    render(<Hero title="My Header" />);
    const divElement = screen.getByText(/My Header/i);
    expect(divElement).toBeInTheDocument();
});