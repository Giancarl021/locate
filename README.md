# locate
Locate a file based on root of project or cwd

## Installation

npm:
```bash
npm install --save @giancarl021/locate
```

yarn:
```bash
yarn add @giancarl021/locate
```

## Usage

From root:
```js
const locate = require('@giancarl021/locate');

const databasePath = locate('data/database');
// Will return <root>/data/database, independent of the file who calls it
```

From CWD:
```js
const locate = require('@giancarl021/locate');

const package = locate('package.json', true);
// Will return <process.cwd()>/package.json, independent of the file who calls it
```