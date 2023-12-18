import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import router from "./router/router.js";
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)