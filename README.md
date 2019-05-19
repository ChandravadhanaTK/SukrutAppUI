# Sukrut App UI
----------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Ionic 4 framework.

## Steps to run in local environment
```
npm install
npm start
```
## To run in Android Studio / Xcode
Please make sure you have the latest Android with Android 9 SDK.
Then run the following commands:
```
npm run build
```
This will build the application code. Then run the following command to get started with either `ios` or `android` platforms.
```
ionic capacitor add <android|ios>
```
After you build your app you will need to copy your capacitor resources into the build dir so execute the following command.
```
ionic capacitor copy
```
To open your application to build/emulate in Android Studio or Xcode run the `open` command.
```
ionic capacitor open <android|ios>
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
To learn Ionic, check out [Ionic documentaion](https://ionicframework.com/docs/).
To learn Capacitor, check out [Capacitor doumentation](https://capacitor.ionicframework.com/docs/).
