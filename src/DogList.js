import React from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

/** DogList
 * 
 * Props:
 * -dogs: array of [{name, age, img, facts}... ]
 * 
 * State:
 * none
 * 
 * App --> Nav, Switch --> DogList
 */
function DogList({ dogs }) {

  console.log("doglist thinks dogs are", dogs);

  return (
    <div>
      {dogs.map(dog => {
        return (
          <div key={uuid()}>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
            <h4>Age: {dog.age}</h4>
            <img src={dog.src} />
          </div>
        );
      })}
    </div>
  );
}

export default DogList;