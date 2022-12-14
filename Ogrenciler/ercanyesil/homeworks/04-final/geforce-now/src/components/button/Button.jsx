import React from 'react'
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button 
      className= {`${styles.registerBtn} ${props.className}`}>
      {props.name}
    </button>
  )
}

export default Button