import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import Navigationbar from "./containers/navigationbar.js";
import {Outlet} from "react-router-dom";

function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(NavigationBar, null),
        React.createElement(Container, null, React.createElement(Outlet, null))
    );
}

export default App