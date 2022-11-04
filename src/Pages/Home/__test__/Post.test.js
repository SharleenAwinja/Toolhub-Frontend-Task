import { render, screen } from '@testing-library/react';
import Post from '../Post';
import { BrowserRouter } from 'react-router-dom';

const mockTool = {
    name: 'wikidata',
    description: 'a tool in the records',
    author: 'Magnus',
    title: 'wikidata'
}

const MockPost = ({mockTool}) => {
    return (
        <BrowserRouter>
        <Post tool={mockTool} />
    </BrowserRouter>
    )
    
}

it('should render three heading elements', () => {
    render(<MockPost mockTool={mockTool} />);
    const headingElements = screen.getAllByTitle('headings');
    expect(headingElements.length).toBe(3);
});