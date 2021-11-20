import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClickedContextProvider } from "./context/clickedContextService";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ClickedContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClickedContextProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
