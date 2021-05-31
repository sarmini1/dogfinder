import React from "react";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";

//make sure to add exact in NavLink, otherwise we'll always hit that link

/** Nav
 * 
 * Props:
 * - dogs names: array of [tubby, whiskey, ...]
 * 
 * State:
 * none
 * 
 * App --> Nav, Switch
 */
function Nav({ dogNames }) {

  console.log("nav thinks dognames are", dogNames);

  return (
    <div className="Nav-dogs">
      {dogNames.map(name => {
        return <NavLink exact to={`/dogs/${name}`} key={uuid()}>{name}</NavLink>
      })}
    </div>
  );
}

export default Nav;