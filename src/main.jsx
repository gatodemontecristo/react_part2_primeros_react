import React from "react";
import ReactDOM from 'react-dom/client';

import {HelloWorldComp,hola} from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldComp/>
    </React.StrictMode>
);