import React from "react";
import { createRoot } from "react-dom/client";
import FAQ from "./FAQ.jsx";
import App from "./App.jsx";

import '../../src/index.css'

createRoot(document.getElementById("root")).render(
    <div className="flex justify-center items-center flex-col gap-3">
        <App className="flex flex-col justify-center items-center gap-2 m-10"></App>
    </div>

)