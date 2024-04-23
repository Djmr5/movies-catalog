import { Meta, StoryFn } from '@storybook/react';
import { IMoviesCarousel } from './types';
import MoviesCarousel from './MoviesCarousel';
import { movies } from '../../constants/moviesMock';

const meta = {
    title: 'Components/MoviesCarousel',
    component: MoviesCarousel,
    parameters: {
        docs: {
            description: {
                component: 'A default moviecard carousel that displays a list of movie cards.',
            },
        },
    },
    argTypes: {
        movies: { control: 'object' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IMoviesCarousel> = (args) => <MoviesCarousel {...args} />;

const moviesList = movies.slice(0, 10).map((movie, index) => ({
    ...movie,
    key: index,
  }));  

export const MovieCardCarousel = Template.bind({});
MovieCardCarousel.args = {
    movies: moviesList,
};
