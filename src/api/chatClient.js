import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = 'http://localhost:5532/classroom'; // Replace with your backend URL

// Adjusted client for handling chat-related operations
const ChatClient = {
    getAllMessages() {
        // Get all chat messages from the API
        return axios.get("/api/messages");
    },
    getMessageById(id) {
        // Get a specific message by its ID
        return axios.get(`/api/messages/${id}`);
    },
    sendMessage(message) {
        // Send a new message to the chat
        return axios.post("/api/messages", message);
    },
    updateMessage(message) {
        // Update an existing message in the chat
        return axios.put(`/api/messages/${message.id}`, message);
    },
    deleteMessage(id) {
        // Delete a message by its ID
        return axios.delete(`/api/messages/${id}`);
    }
};

export { ChatClient };