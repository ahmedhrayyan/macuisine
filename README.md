# Macusine React App

Macusine uses [Spoonacular API](https://spoonacular.com/food-api) to provide recipes and meal plans.

## Motivation

This project was created as a part of my recruitment process for the position of Senior Frontend Developer
at [Robusta Studio](https://desaisiv.com/).

## Tech / Frameworks used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- [Husky](https://typicode.github.io/husky/)

## Requirements

- [Node.js](https://nodejs.org/en/) >= 18+
- [pnpm](https://pnpm.io/) >= 6+

## Installation

1. Clone the repo
2. Install npm dependencies via `pnpm install`
3. Make sure to fill the empty values in the `.env` file with your own API keys vai creating file `.env.local` or fill
   manually using the CLI.

````bash

## Start development server

```bash
pnpm run dev
````

## Build for production

```bash
pnpm run build
```

## Browse app components

```bash
pnpm run storybook
```

## Style guide

- Eslint recommended rules
- Prettier default rules
- Editorconfig standard rules
- Husky pre-commit combined with lint-staged hook to lint and format staged files

## Notes

- I am using Husky pre-commit hook with lint-staged to lint and format staged files before commit. So if you want to
  commit a file that has linting errors, the commit will fail. To bypass this you can use the `--no-verify` flag with
  the commit command.

- I didn't use any async state management library react-query or SWR because it was required to not use any sort of
  caching.

- I've chosen to go with tailwindcss and shadcn/ui instead of using css-in-js based libraries like Chakra or
  Material UI because unlike the latter, tailwindcss and shadcn/ui can be easily migrated to a different framework like
  Next.js which I think this project can benefit for SEO Next.js provide.

- I didn't implement infinite scroll for the recipes list which In my opinion is a better user experience than
  pagination but not using any state management library would make it a bit time consuming to implement.

## Credits

- [Spoonacular API](https://spoonacular.com/food-api)
- [LOGO](https://logo.com/) for creating Macusine wonderful logo :)
- [CookPal](https://dribbble.com/shots/16307696-CookPal-Web-App-Design) for the inspiration of the design since I was
  not provided with any UI or design language to follow.
