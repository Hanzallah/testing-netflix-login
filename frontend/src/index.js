import React from 'react';
import{render} from 'react-dom';
import App from './app';
import {Styles} from './styles';
render(
    <>
    <Styles/>
    <App />
    </>, 
     document.getElementById('root')
);

