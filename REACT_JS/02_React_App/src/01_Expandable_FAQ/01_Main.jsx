import React from "react";
import { createRoot } from "react-dom/client";
import FAQ from "./FAQ.jsx";

import '../../src/index.css'


createRoot(document.getElementById("root")).render(
    <strictMode>
        <div  className="flex flex-col justify-center items-center m-10">
            <FAQ question={"What is REACT ?"} answer={"REACT is a JAVASCRIPT Libray"} />
        </div>
    </strictMode>


)