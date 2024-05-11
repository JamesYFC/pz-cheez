import React from "react";
import ReactDOM from "react-dom/client";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <SwaggerUI url="/api.json" />
    </React.StrictMode>,
);
