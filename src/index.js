import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Button from './components/Button';
import Counter from './components/Increment';
import Label from './components/Label';
import Home from './Home';
import './index.css';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />

    {/* component instance aldık */}
    {/* component set geliştirmek ideal bir yöntem */}
    <Button textColor='red' bgColor='black' text='Button1'></Button>
    <Button textColor='green' bgColor='white' text='Button2'></Button>

    <Label fontSize={24} text='label1'></Label>
    <Label />
    {/* default değerler ile kullanım şekli */}

    <Counter></Counter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
