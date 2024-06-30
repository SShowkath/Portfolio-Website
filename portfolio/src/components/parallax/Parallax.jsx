import React from "react";
import "./Parallax.css";

export default function Parallax ({type}) {
    return (
        <div className="parallax">
            <h1>{type=="portfolio" ? "What I do": "What I did"}</h1>
        </div>
    )
}