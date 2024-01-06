import { useState } from 'react';
import './App.css';
import { PokeContent } from './components/PokeContent';
import { PokeHead } from './components/PokeHead';
import PokemonData from "./PokemonsArr.json"
function App() {

  const [firstTeam,setFirstTeam]=useState([])
  const [secondTeam,setSecondTeam]=useState([])

const handlestart=()=>{

const newFirstTeam=[...PokemonData]
const newSecondTeam=[]
console.log("1",newFirstTeam);
console.log("2",newSecondTeam);

while(newSecondTeam.length<newFirstTeam.length){
  const randomPokemon=Math.floor(Math.random()*newFirstTeam.length)
  const rmvPokemon=newFirstTeam.splice(randomPokemon,1)
  
  newSecondTeam.push(rmvPokemon[0])
  
  setFirstTeam(newFirstTeam)
  setSecondTeam(newSecondTeam)
}

// console.log("rmvpokemon",rmvPokemon);
console.log("3",newFirstTeam);
console.log("4",newSecondTeam);

  // console.log("game start");
}

const team1Power=firstTeam?.reduce((sum,item)=>sum+item.base_experience,0)
const team2Power=secondTeam?.reduce((sum,item)=>sum+item.base_experience,0)

  return (
 <>
      <PokeHead onClick={handlestart} />

{!!secondTeam.length  && (
<>

<PokeContent isWinner={team1Power>team2Power} power={team1Power} pokemons={firstTeam} />
    
    
    <h2 style={{textAlign:'center'}}>VS</h2>
   
    <PokeContent isWinner={team2Power>team1Power} power={team2Power} pokemons={secondTeam} />


</>

)}

    </>
  );
}

export default App;
