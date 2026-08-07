import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeCard from "./ThemeCard.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeCard></ThemeCard>
    </StrictMode>,
);
