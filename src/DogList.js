import React from "react";

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((d) => (
        <div key={d.name}>
          <img src={`${process.env.PUBLIC_URL}/${d.src}`} alt={d.name} />
          <h3>
            {d.name} Age: {d.age}
          </h3>
          {d.facts.map((f, idx) => (
            <div key={idx}>{f}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DogList;
