import React from 'react'
import { Button } from '../Button'
import styles from "./PokeHead.module.css"
export const PokeHead = (props) => {
  return (
    <div  className={styles.head}>
      <h1  className={styles.title}>Pokedex Game</h1>
      <Button onClick={props.onClick}  title="start" />
    </div>
  )
}

