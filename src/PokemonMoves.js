import React,{useState,useEffect} from "react";

function PokemonMoves(props) {
    const [pokemonData,setPokemonData ]=useState(null);
useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
    .then((response) => response.json())
    .then((data) => setPokemonData(data));
    
}, [props.pokemonId]);
//   if (pokemonData) {
//     return (
//       <div>
          
//         <p>{pokemonData.name}'s moves:</p>
//         <ul>
//           {pokemonData.moves.map((move, index) => {
//             return <li key={index}>{move.move.name}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   } else {
//     return null;
//   }

return (
      <div>
            {pokemonData} ?
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul> :<span>Loading</span>
      </div>
    );
}


export default PokemonMoves;
