## :boom: Truckpad Driver

Truckpad Driver is software designed to register drivers from all over Brazil. With it, it is possible to register a driver and their respective data such as CNH and CPF. The system allows data editing, as well as the activation or inactivation of a driver already registered in the system. All of this in the palm of your hand, being fully adjustable to your mobile screen.

![image](https://user-images.githubusercontent.com/31252524/86535225-2bb71c00-beb5-11ea-84af-e1a83116cda6.png)

---

## Project structure

```
├── cypress/                 - Contains the automated test files to test if the application is working correctly.
├── public/                  - Contains the main page that will handle the react build and the font imports.
├── server/                  - A NodeJS API to retrieve the drivers data.
├── src/                     - Contains main web app.
|   ├── assets/              - Images that are rendered inside the app.
|   ├── components/          - Contains all the components that are used inside pages.
|   ├── pages/               - Contains the 3 pages that the app has (Index, Creation and Edit).
|   ├── services/            - Handle api connection.
|   ├── styles/              - Holds the main global styles.
|   ├── utils/               - Contains funtions and variable attributions that works with the components.
|   ├── App.js               - File that holds all pages and driver data together.
|   ├── AppContext.js        - Context API implementation to provide data to all the components.
|   ├── index.js             - Render the App component.
|   ├── routes.js            - React Router configuration.
├── .editorconfig            - Editor compatible configurations.
├── .gitignore               - Git config to exclude folders that don't need to be in git.
├── config-overrides.js      - React App Rewired config file to replace variables from Ant Design Components.
├── cypress.json             - Cypress config.
├── LICENSE                  - MIT license.
├── package.json             - NPM file that scructure project dependencies.
```

---

## Tecnologies used

- ReactJS
- React Context API
- Cypress
- NodeJS

## Tecnologies required

- NodeJS 10 or above
- Yarn package mannager

## Before use

Before inserting any of the available scripts, don't forget to insert the command below in your terminal, so we can install all the dependencies required.

```console
yarn
```

To activate the backend of the app, you need to activate the server, this can be done with the follow commands. Execute one per time and wait for it to finish.

```console
cd server
yarn
yarn start
```

If everything works, you can see this message in terminal.

![image](https://user-images.githubusercontent.com/31252524/86534971-5b652480-beb3-11ea-98d3-4026a4bd9bfc.png)

## Available Scripts

In the project directory, you can run:

```console
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```console
yarn test
```

Launches the test runner in `cypress/integration` folder with cypress to watch end to end specs.

```console
yarn build
```

Builds the app for production to the `build` folder.<br />

### Colaborators

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/aryclenio">
        <img src="https://avatars.githubusercontent.com/aryclenio" width="100px;" alt="Aryclenio Xavier"/>
        <br />
        <sub><b>Aryclenio Xavier</b></sub>
      </a><br />
      <a href="https://github.com/aryclenio/Sculptor/commits?author=aryclenio" title="Code">💻</a>
    </td>
  </tr>
</table>
