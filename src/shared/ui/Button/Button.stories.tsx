import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import {
    ThemeDecorator
} from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'default'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    children: 'default'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'clear button',
    theme: ButtonTheme.CLEAR
};

export const ClearDark = Template.bind({});
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
ClearDark.args = {
    children: 'clear button',
    theme: ButtonTheme.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'outlined button',
    theme: ButtonTheme.OUTLINE
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'outlined button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'outlined button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.decorators = [ThemeDecorator(Theme.LIGHT)];
BackgroundTheme.args = {
    children: 'background button',
    theme: ButtonTheme.BACKGROUND
};

export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.decorators = [ThemeDecorator(Theme.LIGHT)];
BackgroundThemeInverted.args = {
    children: 'background inverted button',
    theme: ButtonTheme.BACKGROUND_INVERTED
};

export const Square = Template.bind({});
Square.decorators = [ThemeDecorator(Theme.LIGHT)];
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
};

export const SquareSizeL = Template.bind({});
SquareSizeL.decorators = [ThemeDecorator(Theme.LIGHT)];
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
};
