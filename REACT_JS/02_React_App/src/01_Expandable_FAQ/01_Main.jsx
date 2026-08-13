import React from "react";
import { createRoot } from "react-dom/client";
import FAQ from "./FAQ.jsx";

import '../../src/index.css'

createRoot(document.getElementById("root")).render(
    <strictMode>
        <div  className="flex flex-col justify-center items-center gap-2 m-10">
            <FAQ question={"What is HTML ?"} answer={"HTML stands for HyperText Markup Language, and it is the standard markup language used to create and structure content on the World Wide Web. It acts as the skeleton or foundational blueprint of any website, telling web browsers (like Chrome, Safari, or Firefox) how to display text, images, links, and multimedia."} />   
        </div>
    </strictMode>


)