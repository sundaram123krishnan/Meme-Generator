import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Form from "./Form";

export default function App() {
  return (
    <div className="flex justify-center mt-10 rounded-lg">
      <div className="w-4/6 border-2 flex flex-col rounded-lg">
        <Header />
        <Form />
      </div>
    </div>
  );
}
