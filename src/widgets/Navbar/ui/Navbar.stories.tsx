import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: 'Navbar'
};
