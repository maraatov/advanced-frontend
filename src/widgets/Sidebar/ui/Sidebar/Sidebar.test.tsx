import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RenderWithTests } from '../../../../shared/lib/tests/renderWithTests/renderWithTests';
import { Sidebar } from './Sidebar';
import {
    componentRender
} from '../../../../shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {

    test('have sidebar', () => {
        componentRender(<Sidebar/>);
        expect(screen.getByTestId('sidebar'));
    });

    test('test toggle', async () => {
        componentRender(<Sidebar/>);
        expect(screen.getByTestId('sidebar'));
        const toggleButton = screen.getByTestId('toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
