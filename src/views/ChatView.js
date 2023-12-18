import React, { useEffect, useState } from "react"; // Import React and necessary hooks
import 'bootstrap/dist/css/bootstrap.min.css';

function ChatView() {
    // State to store chat messages
    const [messages, setMessages] = useState([]);

    // Simulated initial messages (for illustration)
    const initialMessages = [
        {id: 1, text: "Hello!"},
        {id: 2, text: "How are you?"},
        // Add more initial messages if needed
    ];

    // Effect to simulate fetching messages on component mount
    useEffect(() => {
        // Simulate fetching messages
        setMessages(initialMessages); // Set initial messages to state on mount
    }, []); // Empty dependency array ensures this effect runs only on mount

    // Function to send a new message
    const sendMessage = () => {
        const newMessage = {
            id: messages.length + 1, // Generate a unique ID for the new message
            text: "New message", // Replace with actual message text
            // Add more properties as needed (e.g., sender, timestamp)
        };
        setMessages([...messages, newMessage]); // Update state with the new message
    };

    function createChatView(messages, sendMessage) {
        return React.createElement(
            'div',
            {className: 'chat-container'},
            React.createElement(
                'div',
                {className: 'chat-messages'},
                messages.map((message) =>
                    React.createElement(ChatMessage, {key: message.id, message: message})
                )
            ),
            React.createElement(
                'div',
                {className: 'chat-input'},
                React.createElement('input', {type: 'text', placeholder: 'Type a message...'}),
                React.createElement('button', {onClick: sendMessage}, 'Send')
            )
        );
    }

} export default createChatView; // Correct export statement for createChatView
