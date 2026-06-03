import React from "react";
import { Link } from 'react-router-dom'

export default function () {
  return (
    <>
    <div className="div2">
      <i className="fa-solid fa-globe"></i>
      <Link to="/Favorites">
      <i className="fa-solid fa-user"></i>
      </Link>
    </div>
    </>
  );
}
