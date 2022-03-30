// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import { runWithAdal } from "react-adal";
// import { authContext, getToken } from "./adalConfig";

// const DO_NOT_LOGIN = false;

// runWithAdal(
//   authContext,
//   () => {
//     console.log(getToken())
//     require("./indexApp");
//   },
//   DO_NOT_LOGIN
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);