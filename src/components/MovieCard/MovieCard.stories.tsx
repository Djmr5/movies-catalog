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
        genreId: { control: 'number' },
        movieId: { control: 'number' },
        voteAverage: { control: 'number' },
        posterPath: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IMovieCard> = (args) => <MovieCard {...args} />;

export const MovieCardPoster = Template.bind({});
MovieCardPoster.args = {
    title: 'John Wick: Chapter 4',
    genreId: 28,
    movieId: 603692,
    voteAverage: 8.1,
    posterPath: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
};
