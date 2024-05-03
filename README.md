# Movie Catalogue App

A simple movie catalogue app built with React and Vite for the TC3005B course.

## Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![React][React.js]][React-url]
* [![Vite][Vite.js]][Vite-url]

Configuration steps:

1. TailwindCSS

  ```bash
  bun add tailwindcss@latest postcss@latest autoprefixer@latest
  bunx tailwind init # not sure
  bun run tailwindcss init -p # not sure
  ```

2. Storybook

  ```bash
  bun add classnames
  bun add storybook@latest
  bun add storybook@latest add @storybook/addon-styling-webpack # only for webpack
  bunx sb init --type react
  ```

## Getting Started

### Prerequisites

[![Node][Node.js]][Node-url]

### Installation

1. Clone the repo

   ```sh
    https://github.com/Djmr5/movies-catalog
   ```

2. Install NPM packages

   ```sh
    yarn install
   ```

3. Create a `.env` file in the root directory and add the following:
  You can use the .env.sample file as a template

   ```sh
    VITE_MOVIES_API_KEY=Y0UR_0WN_4P1_K3Y_H3R3
   ```

4. Start the project

   ```sh
    yarn dev
   ```

[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite.js]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
