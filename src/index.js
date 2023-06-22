import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <BrowserRouter router={router}/>
  </RecoilRoot>
);

