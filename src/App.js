import React from "react";

function App(){
  return (
    <div>
    <Logo />
    <BestPokemon />
    <CaughtPokemon />
    </div>
  );
}
const Logo = ()=>{
  const appName = "Leila Pokedex";
  return (

    <header>
      <h1>Welcome to the {appName}</h1>;
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      ></img>
    </header>
  );
}
const CaughtPokemon= ()=>{
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;
}
// function Logo(){
//   return (
//     <header>
//       <h1>Welcome to the Pokedex</h1>;
//       <img
//         src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
//         alt=""
//       ></img>
//     </header>
//   );
  
// }
const BestPokemon = ()=>{
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability) => (
          <li>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

// function BestPokemon(){
//   return (<p>My favorite Pokemon is Squirtle</p>);
  
// }
export default App;
