import React from 'react'
import { PokeCard } from '../PokeCard'
import styles from "./PokeContent.module.css"
export const PokeContent = (props) => {
    console.log("pokecontentprops",props);
  return (
    <div  className={styles.bg_color}>
    <div className={styles.description}>
     
        <p className={props.isWinner? styles.winner : styles.loser} >
           {props.isWinner? "winner" : "Loser"}
        </p>
        <p className={styles.power}>{props.power}</p>
        </div>
     {/* <PokeCard /> */}
     <div className={styles.content}> 
  {  props.pokemons.map((pokemon)=>
  (<PokeCard key={"pokecard"+pokemon.id}
//   {...pokemon}
   type={pokemon.type} 
   name={pokemon.name}
   base_experience={pokemon.base_experience}
   id={pokemon.id}
   />
  ))}
    </div>
    </div>
  )
}

