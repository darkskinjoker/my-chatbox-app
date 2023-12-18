import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const React = require('react'); // Import React

// Navigationbar component definition
function Navigationbar() {
    return React.createElement(
        'Navbar', // Navbar component from React Bootstrap
        { bg: "primary", "data-bs-theme": "dark" }, // Props for Navbar
        React.createElement(
            'Container', // Container component from React Bootstrap
            null, // No props needed for Container
            React.createElement(
                'Navbar.Brand', // Navbar.Brand component from React Bootstrap
                { href: "#home" }, // Props for Navbar.Brand
                "Chat App" // Text content for Navbar.Brand
            ),
            React.createElement(
                'Nav', // Nav component from React Bootstrap
                { className: "me-auto" }, // Props for Nav
                React.createElement('NavLink', { className: "nav-link", to: "/chat" }, "Chat"), // NavLink for Chat
                React.createElement('NavLink', { className: "nav-link", to: "/contacts" }, "Contacts") // NavLink for Contacts
                // Add more NavLinks for other chat functionalities if needed
            )
        )
    );
}

module.exports = Navigationbar; // Export the Navigationbar component
