import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function ChatMessageCard({ message }) {
    return (
        // Card component from React Bootstrap for displaying chat messages
        <Card>
            <Card.Body>
                {/* Display the content of the chat message */}
                <Card.Text>
                    {message.content}
                </Card.Text>
                {/* Include a link to edit the message (example for illustration) */}
                {/* Modify this NavLink according to your chat app requirements */}
                <NavLink className="nav-link" to={`/message/${message.id}/edit`}>
                    Click to edit
                </NavLink>
            </Card.Body>
        </Card>
    )
}
