# NodeJS Starter Project
This is an empty project for quickly starting up with nodejs.

#### Features:
* git & git-hooks
* eslint & default conventions (https://github.com/smartprix/js_conventions)
* babel
* testing with mocha and chai
* production running with pm2
* lodash and sm-utils already installed

#### Conventions:
* Keep all your source code in src directory
* Keep all your test cases (with mocha) in test directory
* Compiled code (from babel) will be stored in dist directory
* Keep all your garbage files (temporary testing and all) in garbage directory

#### How To Start:
* Clone this directory
* Update dependencies `ncu -u` and then run `yarn`
* You are ready. Start writing your code in `src/index.js`

#### Commands:
```bash
# Run eslint to check coding conventions
eslint src
# Or Alternatively
npm run lint

# Run tests
npm test

# Compile Files
npm run build

# Start dev server which autoreloades on changes (using nodemon)
npm start
```
