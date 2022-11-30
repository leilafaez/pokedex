import React from "react";


const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {/* {props.map((ability) => (
          <li key={ability}>{ability}</li>
        ))} */}
        <li>{props.abilities[0]}</li>
        <li>{props.abilities[1]}</li>
        <li>{props.abilities[2]}</li>
      </ul>
    </div>
  );
};

export default BestPokemon;