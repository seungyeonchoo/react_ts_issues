# github repository(angular/angular-cli) issue list page

## Demo

https://s3.console.aws.amazon.com/s3/buckets/react-typescript-issue-list?region=eu-west-2&tab=properties

## Quick Start

```
- clone project repo
git clone https://github.com/seungyeonchoo/react_ts_issues.git
cd react_ts_issues

- start project
npm install
npm start

yarn install
yarn start

* before start this project BASE_URL and ACCESS_KEY are needed to be put in .env

```

> ## Contents

- [Technical stack](#Technical-stack)
- [Directories](#Directories)
- [Functionality](#Functionality)
- [Prettier, Eslint](#Prettier,-Eslint)

<br>

> ## Technical stack

 <br/>

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://camo.githubusercontent.com/5d16e7fdd964ebca50ca82d6c8b081045630340427c463f4470050acd4e50ef3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d5461696c77696e642b43535326636f6c6f723d323232323232266c6f676f3d5461696c77696e642b435353266c6f676f436f6c6f723d303642364434266c6162656c3d">
<br>
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white%22%3E">
<img src="https://img.shields.io/badge/redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white%22%3E">
<img src='https://camo.githubusercontent.com/2c53895491eecd8aed53655963595ae41628198bd1d5939fa100b11ee9e2513f/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d52656163742b517565727926636f6c6f723d464634313534266c6f676f3d52656163742b5175657279266c6f676f436f6c6f723d464646464646266c6162656c3d'>
<br>
<br>

> ## Directories

```

```

> ## Functionality

<br/>

- Issue List page

1. displays issue list of agular/agular-cli repesitory

2. supports sort and search function by providing issue toolbar

3. supports infinite scroll to load additional issue list

<br/>

- Issue Detail page

1. displays issue detail which is user clicked

2. shows list of comments at the end of the page

3. is implemented by using reponsive design

<br/>

> ## Prettier, Eslint

- ### Prettier

```javascript
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

- ### Eslint

```javascript
{
  "parser": "@typescript-eslint/parser",
  "extends": ["react-app", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn",
    "no-multiple-empty-lines": "warn",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "eqeqeq": "warn",
    "dot-notation": "warn",
    "no-unused-vars": "warn",
    "react/destructuring-assignment": "warn",
    "react/jsx-pascal-case": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/no-unused-state": "warn",
    "react/jsx-key": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-curly-brace-presence": "warn"
  }
}

```
