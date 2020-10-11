
  
## What is React?
* Open source library for building the User interfaces
* Its not a framework.
* Focus only on UI which can build only Rich HTML interfaces.
* Rich Ecosystem: To build Routing, Http services react will support to import the library's.
* It's a Component Based Architecture
* React is declaritive
* React can integrative with any other page like Angular or Veu.js.

### Prerequiste for React JS :
  * JavaScripts:
    * 'this' keyword, filter, map and reduce
  * ES6+:
    * let & const, arrow functions, template literals, default parameters, object literals, rest 
    and spread operators and destructing assignment

## Create new React JS Application:
* __`npx create-react-app reactJs0816`__  (or) 
    * `npm install create-react-app -g`
    * `create-react-app <project-nameXXXXX>`
* This will create new application of ReactJs modules inside reactJs0816 folder
* `npx` is the npm package runner when we install npm
* `npm start` 
* This will run the application on default port 3000

## Folder Structure:

#### package.json:
* It contains dependencys of the projects
* Helps to run and install the application.

#### public(folder):
It contails 3 files.
*  __manifest.json__ : It is conserned about progressive webapps
*  __index.html__: 
     *  This is the only 1 html file will have in our application(SPA). View will dynamically generates using this file.
     *  Mostly will not do any changes in this file.
     *  If React want control UI it will have 1 tag __`<div id='root'></div>`__ 
     *  Runtime react take this div tag and its responsible to UI
*  __src__: 
     *  Will Create all our Components in this folder.
     *  By default it will create some files inside this.
     *  Starting point of the application is __index.js__
*   __index.js__:
    * In this we specify the root Component ie., `App` Component & DOM element (`root` which is the id in index.html) which will be controller by react)
        ``` JavaScript
            ReactDOM.render( 
              <React.StrictMode>
                <App /> 
               </React.StrictMode>,
               document.getElementById('root')
             );
         ``` JavaScript
             
        
   
 
 

 
















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
