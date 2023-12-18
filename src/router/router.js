import ChatView from "../views/ChatView.js";
import App from "../App.js";
import { createRoute, createRoutes } from 'react-router-dom';
import './styles.css';

export const CHAT_VIEW_PATH = "/chat";

const routes = [
    createRoute({
        path: "/",
        element: App,
        children: [
            createRoute({
                path: CHAT_VIEW_PATH,
                element: ChatView,
            }),
            // ... other routes for different views in the chat app
        ],
    }),
];

const router = createRoutes(routes);

export default router;