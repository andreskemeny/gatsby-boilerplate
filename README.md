# Gatsby Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install the packages.

```bash
yarn install
```

## Usage

### Routing

Routing is divided in two:

1. app.tsx is where the main definition of routes happens
2. Sub-page routers, for each sub-page created, the routes pertaining to that set of sub-pages needs to be defined and then the _sub router_ must be added to app.tsx

There's an example already created so make sure to make use of it as a guideline.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs `gatsby build`, runs the application in development mode.

From [Gatsby's docs](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/): _Runs a server in the background, enabling useful features like live reloading and Gatsby’s data explorer._

### `yarn build`

Runs `gatsby build`, builds the app for production.

From [Gatsby's docs](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/): _creates a version of your site with production-ready optimizations like packaging up your site’s config, data, and code, and creating all the static HTML pages that eventually get rehydrated into a React application._

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
