import { Meta, StoryFn } from '@storybook/react';
import FavButton from './FavButton';
import { IFavButton } from './types';

const meta = {
    title: 'Components/FavButton',
    component: FavButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A custom button component that adds or removes a movie from favorites',
            },
        },
    },
    argTypes: {
        id: { control: 'number' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IFavButton> = (args) => <FavButton {...args} />;

export const NotFavorite = Template.bind({});
NotFavorite.args = {
    id: 1,
};
