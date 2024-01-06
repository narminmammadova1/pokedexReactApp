// import React from 'react'
// import styles from "./PokeCard.module.css"

// export const PokeCard = (props) => {

//     const getPokemonImg=(id)=>{
// const newId=id.toString()
// let resultId=id

// // resultId=newId.length==1? "00"+newId : newId.length==2 ?"0"+newId : id
// if(newId.length==1){
//     resultId="00"+id
// }
// if(newId.length==2){
//     resultId="0"+id
// }
// return resultId
//     }
//   return (
//     <div className={styles.card}>
//      <h1  className={styles.card_title}>{props.name}</h1>
//      <img src={` https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonImg(props.id)}.png`} alt="" />
//      <p>Type:{props.type}</p>
//      <p>EXP{props.base_experience}</p>
//     </div>
//   )
// }



import React from 'react';
import styles from "./PokeCard.module.css";

export const PokeCard = (props) => {
  const getPokemonImg = (id) => {
    const newId = id?.toString();
    let resultId = id;

    if (newId?.length === 1) {
      resultId = "00" + id;
    }
    if (newId?.length === 2) {
      resultId = "0" + id;
    }

    return resultId;
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.card_title}>{props.name}</h1>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonImg(props?.id)}.png`} alt="" />
      <p className={styles.item}>Type: {props.type}</p>
      <p className={styles.item}>EXP: {props.base_experience}</p>
    </div>
  );
};