import React from "react";
import { createRoot } from "react-dom/client";
import FAQ from "./FAQ.jsx";


createRoot(document.getElementById("root")).render(
    <strictMode>
        <FAQ question={"what is REACT ?"} answer={"REACT is a JAVASCRIPT Libray"}/>
    </strictMode>


)