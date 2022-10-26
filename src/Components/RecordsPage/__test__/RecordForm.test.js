import { render, screen } from '@testing-library/react';
import RecordForm from '../RecordForm';

test('on initial render, the add record button is disabled', () => {
    render(<RecordForm/>);
    const buttonElement = screen.getByRole('button', {name: /add record/i});
    expect(buttonElement).toBeEnabled();
});