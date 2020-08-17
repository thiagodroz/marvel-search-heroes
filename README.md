# Marvel Heroes Search

## Commands

To install the dependencies:

> yarn

To run the project in development mode:

> yarn start

To build the project to production:

> yarn build

To run the unit tests (if `CI=true` it's gonna run the tests once and generate the coverage report, otherwise it's gonna run the tests in watch mode):

> yarn test

To run end-to-end tests:

> yarn test:cy

## Tests

Due to the lack of time, I didn't increase the test coverage, but I implemented examples of the following types of tests:

- Unit test of isolated functions: `src/utils/url-builder.test.ts`;
- Unit test of React component mocking the hook: `src/components/pages/HeroPage/components/HeroComics/HeroComics.test.tsx`;
- Unit test of Redux-Saga: `src/store/sagas/characters-saga.test.ts`;
- Snapshot testing component with just structural content: `src/components/shared/Footer/Footer.test.tsx`;
- e2e testing flow: `cypress/e2e/home.test.ts`;
