import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Card from "./Card.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Card
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300"
            name="John Doe"
            role="Frontend Developer"
            location="New York"
        />
    </StrictMode>
);