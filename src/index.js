import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from  "./App";
import { TodosProvider } from "./contexts";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <React.StrictMode>
    <TodosProvider>
        <App />
    </TodosProvider>
    </React.StrictMode>
)