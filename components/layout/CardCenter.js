import React from 'react'
import classes from './CardCenter.module.css';

function CardCenter(props) {
  return (
    <main className={classes.main}>{props.children}</main>
  )
}

export default CardCenter