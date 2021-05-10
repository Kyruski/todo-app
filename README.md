# Todo-App

This is a practice Todo application with the ability to create todos with a title and description. Afterwards, you can toggle a todo item as completed, or delete the todo.

## Built With

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In addition, this project utilizes the following technologies/packages:

`Apollo GraphQL (server and client)`

`MongoDB w/ Mongoose`

`ExpressJS`

`Typescript`

`Styled Components`

`Material UI`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

[Node](http://nodejs.org/) and [yarn](https://yarnpkg.com/) are required.

It is recommended to install Node using Node Version Manager (NVM).

The following is a tutorial on how to install NVM: [Install Node via NVM](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/).

```
You should be able to run the following command after the installation procedure
below.

% nvm ls
->     v14.16.0

% yarn --version
  1.22.10
```

### Installing

A step by step series of examples that tell you how to get the server running.

Once you are in the terminal and have changed your current directory to the repo, run the following command to install all necessary dependencies, populate the sample data, build the bundle, and open the app:

```
yarn build-start
```

Alternatively, to open the App once closed:

```
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app if you have already created a bundle.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you haven't created a bundle yet, you can instead run to following command

### `yarn build-start`

Builds the bundle file and then starts the server

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn cra-start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn cra-test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn cra-build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn cra-eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
