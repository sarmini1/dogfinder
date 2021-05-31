import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

/**DogDetails
 * 
 * Props:
 * -dogs: array of [{name, age, img, facts}... ]
 *
 * State:
 * none
 * 
 * App --> Nav, Switch --> DogDetails
 */
function DogDetails({ dogs }) {

  const { name } = useParams();
  console.log("name is", name);

  //could make a new component called dogfinder that does all of the finding work
  //then calls dogdetails to display that particular dog. dogdetails would just become
  //a simple, presentational component

  const dog = dogs.find(dog => dog.name === name);
  //handle case if dog doesn't exist in this array
  //redirect back to dogs or some page that says dog doesn't exist or something

  return (
    <div>
      <h2>{dog.name}</h2>
      <h4>Age: {dog.age}</h4>
      <img src={dog.src} />
      <ul>{dog.facts.map(fact => { return <li key={uuid()}>{fact}</li> })}</ul>
    </div>
  );
}

export default DogDetails;