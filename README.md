# Math Magicians App

<img align="right" src="./public/react.svg" style="width:400px;">

> Milestone 1 : Set up the environment and tools needed to develop a React application.

> Milestone 2 : Develop React components that will hold the core functionality: a calculator.

> Milestone 3 : Import and merge the logic needed to make the Calculator components developed in the previous milestone work.

> Milestone 4 : Refactor the Calculator components, to use hooks instead of using class based components.

> Milestone 5 : Full website for the Math magicians app, consisting of several pages and using the components already created.

> Milestone 6 (Pair-programming with  [@Debas-31](https://github.com/Debas-31)) : Write unit tests, React components snapshots, intergration tests using the Jest and React Testing Library libraries

> Milestone 7 : Deploy to different host services like Heroku and Netlify

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Built With

- JavaScript library : ReactJs

## Live Demo

- Served with Heroku : [Live](https://math-magicains-react.herokuapp.com/)
- Served with Netlify pages : [Live](https://61e54ce3d5eabe23bd996a96--reverent-leavitt-a3ab4f.netlify.app/)
- Served with Github pages : [Live](https://od-c0d3r.github.io/math-magicains-react/)

## App Tree

<img align="right" src="./public/screen_shot.gif" width="350px">

```markdown
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── react.svg
│   └── robots.txt
├── src
│   ├── components
│   │   ├── app
│   │   │   ├── App.js
│   │   │   └── App.scss
│   │   ├── calContent
│   │   │   ├── calContent.js
│   │   │   └── calContent.scss
│   │   ├── calculator
│   │   │   ├── Calculator.js
│   │   │   └── Calculator.scss
│   │   ├── calculatorPage
│   │   │   ├── CalculatorPage.js
│   │   │   └── CalculatorPage.scss
│   │   ├── header
│   │   │   ├── Header.js
│   │   │   └── Header.scss
│   │   ├── homePage
│   │   │   ├── HomePage.js
│   │   │   └── HomePage.scss
│   │   ├── key
│   │   │   ├── Key.js
│   │   │   └── Key.scss
│   │   ├── keyboard
│   │   │   ├── Keyboard.js
│   │   │   └── Keyboard.scss
│   │   ├── navbar
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.scss
│   │   ├── quotePage
│   │   │   ├── QuotePage.js
│   │   │   └── QuotePage.scss
│   │   └── screen
│   │       ├── Screen.js
│   │       └── Screen.scss
│   ├── logic
│   │   ├── calculate.js
│   │   ├── dark.js
│   │   └── operate.js
│   ├── test
│   │   ├── __snapshots__
│   │   │   └── components.test.js.snap
│   │   ├── logic
│   │   │   ├── calculate.test.js
│   │   │   └── operate.test.js
│   │   ├── components.test.js
│   │   └── interactions.test.js
│   ├── index.js
│   └── index.scss
```

## Getting Started

To get a local copy up and running follow these simple example steps

- From your terminal enter in sequence 
  - `git clone https://github.com/od-c0d3r/math-magicains-react.git`
  - `code math-magicains-react`

### Available Scripts

In the project directory, you can run:

- #### `npm install`

  - Install the project dependencies.

- #### `npm start`

  - Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  - The page will reload when you make changes.\
You may also see any lint errors in the console.

- #### `npm test`

  - Launches the test runner in the interactive watch mode.

- #### `npm run build`

  - Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

  - The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Coders

👤 **Omar R.**

- Github: [@od-c0d3r](https://github.com/od-c0d3r)
- LinkedIn: [omarrashad](https://linkedin.com/in/omarrashad)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgemnt

- Calculator design by [Özge Oldaç](https://dribbble.com/shots/6805175-Daily-UI-004-Calculator/attachments/6805175-Daily-UI-004-Calculator?mode=media)

## 📝 License

This project is [MIT](./MIT.md) licensed.

## Todo

- [x] First implementation design
- [x] Display calculation process progress
- [x] Improve calculator desgin
- [ ] Seperate total from the operation display on seperate line
- [ ] Improve pages design
