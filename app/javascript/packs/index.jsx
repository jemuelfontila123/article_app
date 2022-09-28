import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../components/App";
import ReactDOM from "react-dom/client"
document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.createRoot(
        document.getElementById("root"),
    ).render(
        <App/>)
});
