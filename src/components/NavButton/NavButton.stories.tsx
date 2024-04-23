import { withRouter } from 'storybook-addon-remix-react-router'
import { Meta, StoryFn } from '@storybook/react';
import NavButton from './NavButton';
import { INavButton } from './types';

const meta = {
    title: 'Components/NavButton',
    component: NavButton,
    decorators: [withRouter],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A custom button component that navigates to a specific route',
            },
        },
    },
    argTypes: {
        text: { control: 'text' },
        color: {
            control: { type: 'select' },
            options: ['red', 'blue', 'green', 'yellow', 'purple'],
        },
        link: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<INavButton> = (args) => <NavButton {...args} />;

export const MovieCardCarousel = Template.bind({});
MovieCardCarousel.args = {
    text: 'Popular Movies',
    color: 'red',
    link: '#',
};
