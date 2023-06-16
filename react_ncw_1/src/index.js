import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import Nav from './app/Nav';
import Main from './app/Main';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
    <Nav/>
    <Main/>
    </>
  
);


