import React, { useState }  from "react";


const CaughtPokemon = (props) => {
//   const [caught, setCaught] =useState(0);
// //  const date = new Date().toLocaleDateString();
// const catchPokemon = ()=>{
//   return setCaught(caught+1);
  
// }
//   return <div>
//     <p>
//       Caught {caught} Pokemon on {props.date}
//     </p>
//     <button onClick={catchPokemon}>click</button>
//   </div>;
  const [caught, setCaught] = useState([]);
  //  const date = new Date().toLocaleDateString();
  const catchPokemon = () => {
    return setCaught(caught.concat(Math.floor(Math.random() * caught.length)));
    
  };
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((element,index)=>{
          return <li key={index}>{element}</li>
        })}
      </ul>
      <button onClick={catchPokemon}>click</button>
    </div>
  );
};

export default CaughtPokemon;