import { Meta, StoryFn } from '@storybook/react';
import { IPill } from './types';
import Pill from './Pill';

const meta = {
    title: 'Components/Pill',
    component: Pill,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A pill/chip like component that contains a text',
            },
        },
    },
    argTypes: {
        text: { control: 'text' },
        color: {
            control: { type: 'select' },
            options: ['red', 'blue', 'green', 'yellow', 'purple'],
        },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IPill> = (args) => <Pill {...args} />;

export const PillExample = Template.bind({});
PillExample.args = {
    text: 'Action',
    color: 'red',
};
