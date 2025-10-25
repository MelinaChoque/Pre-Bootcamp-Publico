import { useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import obras from "../src/js/obras"

function App() {

  return (
    <>
      <div className="w-100 d-flex justify-content-center row align-items-center text-center">
        <ul>
          <h1 className="text-success mb-5">Galería de Arte</h1>
          {obras.map((obra) => (
            <li className="mt-3" key={obra.id}>
              <Link className="text-success text-decoration-none " to={`/obra/${obra.id}`}>{obra.titulo}</Link>
            </li>
          ))}
        </ul>
      </div>


    </>
  );
}

export default App;
