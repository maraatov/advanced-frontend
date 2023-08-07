import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ThemeButton } from './Button';
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
    theme: ThemeButton.CLEAR
};

export const ClearDark = Template.bind({});
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
ClearDark.args = {
    children: 'clear button',
    theme: ThemeButton.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'outlined button',
    theme: ThemeButton.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlineDark.args = {
    children: 'outlined button',
    theme: ThemeButton.OUTLINE
};
