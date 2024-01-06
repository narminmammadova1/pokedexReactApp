import React from 'react'
import styles from "./Button.module.css"
export const Button = (props) => {
//    const {title="button",onClick}=props
  return (
    <div>
      <button onClick={props.onClick} className={styles.btn_success}>{props.title}</button>
    </div>
  )
}

