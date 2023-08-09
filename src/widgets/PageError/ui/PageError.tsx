import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

export const PageError = () => {

    const onThrow = () => {
        location.reload();
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            gap: '5px'
            // eslint-disable-next-line i18next/no-literal-string
        }}>
            Привет возникла ошибка чувак!
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button theme={ButtonTheme.CLEAR} onClick={onThrow}>
                Перезагрузить
            </Button>
        </div>
    );
};
