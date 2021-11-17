import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Filter from './index';

test('Correct text in the document', () => {
    const handleCloseFilter = jest.fn()
    render(<Filter title="Filter modal" handleCloseFilter={handleCloseFilter} />);
    const selectElement = screen.getByText('Select a gender');
    expect(selectElement).toBeInTheDocument();
})