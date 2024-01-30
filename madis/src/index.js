import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary fallback= "There was an error">
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ErrorBoundary>
);