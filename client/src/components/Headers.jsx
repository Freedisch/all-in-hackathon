import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>GPT-Coach</h1>
        </Link>
      </div>
    </header>
  );
}

export default Headers;
