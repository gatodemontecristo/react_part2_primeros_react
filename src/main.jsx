import React from "react";
import ReactDOM from 'react-dom/client';
import {HelloWorldComp,hola} from './HelloWorldApp';
import {FirstApp} from "./FirstApp";
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <HelloWorldComp/>
        <FirstApp  subTitle={123}/>
    </React.StrictMode>
);