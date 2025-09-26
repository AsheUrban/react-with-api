# React with API

A React application that demonstrates consuming data from an external API and managing state using reducers and actions. The project fetches a list of parks and displays them in a simple interface. It highlights asynchronous data handling, error boundaries, and clean separation of concerns between components, actions, and reducers.

Note: This project does not include the API itself and requires a separate backend service to run successfully.

## Features
- Fetch data from an external API.
- Handle asynchronous requests with error catching.
- Manage state with a reducer and dispatched actions.
- Display data dynamically in React components.
- Provide loading and error states for better UX.

## Technologies Used
- _React_
- _JavaScript (ES6)_
- _React Hooks (useEffect, useReducer)_
- _HTML_
- _CSS_

## Getting Started

### Prerequisites
- Node.js (v14 or later recommended)
- npm (comes with Node)

### Installation
Clone the repository:
```bash
git clone https://github.com/AsheUrban/react-with-api.git
cd react-with-api
```

#### Install dependencies:
```bash
npm install
```

### Running the App
Start the development server:
```bash
npm start
```

This will open the app in your default browser at http://localhost:3000

### Building for Production
```bash
npm run build
```

## Project Structure
- `src/components/` — Contains React components like `ParkList`.
- `src/actions/` — Action creators for success and failure states.
- `src/reducers/` — Reducers to manage loading, data, and errors.
- `src/index.js` — Entry point that renders the React app.
- `public/` — Static assets and base HTML template.

## Notes
This project expects an API endpoint at `https://localhost:5001/api/Parks`. If the backend is not running, fetch requests will fail with a connection error. The structure still demonstrates proper React patterns for API-driven apps.

## License
This project is provided for educational purposes and is not licensed for production use.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
