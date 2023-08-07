import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../config/i18n/i18forTests';

interface renderWithTestsProps {
    children: ReactNode;
}

export const RenderWithTests: React.FC<renderWithTestsProps> = ({ children }) => {
    return (
        <div>
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </div>
    );
};
