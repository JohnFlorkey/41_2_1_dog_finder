import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav>
      {dogs.map((d) => (
        <NavLink key={d} exact to={`/dogs/${d}`}>
          {d}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
