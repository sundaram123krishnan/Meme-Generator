import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function Header() {
  return (
    <div className="flex justify-center items-center px-10 py-10 bg-gradient-to-tl from-violet-300 via-violet-400 to-violet-800 text-white">
      <div>
        <h1 className="text-4xl font-bold">Meme Generator</h1>
      </div>
    </div>
  );
}
