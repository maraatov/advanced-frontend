import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ButtonTheme } from './Button';

describe('Button tests', () => {
    test('loads and displays greeting', async () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST'))
            .toBeInTheDocument();
    });

    test('to have class', async () => {
        render(<Button className={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
