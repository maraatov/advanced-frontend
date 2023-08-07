import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Sidebar } from './Sidebar';
import {
    ThemeDecorator
} from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../app/providers/ThemeProvider';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: 'Sidebar'
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
    className: 'Sidebar'
};
