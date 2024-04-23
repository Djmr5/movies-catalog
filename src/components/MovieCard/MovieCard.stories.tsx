import { Meta, StoryFn } from '@storybook/react';
import { IMovieCard } from './types';
import MovieCard from './MovieCard';

const meta = {
    title: 'Components/MovieCard',
    component: MovieCard,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A default moviecard poster that displays the movie title, genre, vote average, and the poster as a background image.',
            },
        },
    },
    argTypes: {
        title: { control: 'text' },
        genre_ids: { control: 'array' },
        id: { control: 'number' },
        vote_verage: { control: 'number' },
        poster_path: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IMovieCard> = (args) => <MovieCard {...args} />;

export const MovieCardPoster = Template.bind({});
MovieCardPoster.args = {
    title: 'John Wick: Chapter 4',
    genre_ids: [28],
    id: 603692,
    vote_average: 8.1,
    poster_path: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
};
