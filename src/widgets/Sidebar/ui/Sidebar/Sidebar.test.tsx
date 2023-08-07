import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RenderWithTests } from 'shared/lib/renderWithTests/renderWithTests';
import { Sidebar } from './Sidebar';

describe('test', () => {

    test('have sidebar', () => {
        render(<RenderWithTests><Sidebar/></RenderWithTests>);
        expect(screen.getByTestId('sidebar'));
    });

    test('test toggle', async () => {
        render(<RenderWithTests><Sidebar/></RenderWithTests>);
        expect(screen.getByTestId('sidebar'));
        const toggleButton = screen.getByTestId('toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
