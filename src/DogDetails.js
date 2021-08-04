import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.filter((d) => d.name === name);
  return (
    <div key={dog[0].name}>
      <img src={`${process.env.PUBLIC_URL}/${dog[0].src}`} alt={dog[0].name} />
      <h3>
        {dog[0].name} Age: {dog[0].age}
      </h3>
      {dog[0].facts.map((f, idx) => (
        <div key={idx}>{f}</div>
      ))}
    </div>
  );
}

export default DogDetails;
