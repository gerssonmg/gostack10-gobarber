import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// yarn add eslint -D
// yarn eslint --init
// delete file package-lock.json
// yarn

// yarn add prettier eslint-config-prettier eslint-plugin-prettier
// create .prettierrc

// yarn eslint --fix src --ext .js

// create .editorconfig
// create .env
// create .gitignore
// create README.md
