import classes from '../styles/TodoItem.module.css'
import React from 'react';
const TodoItem : React.FC<{text : string, onRemoveTodo: (event: React.MouseEvent) => void}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
  )
}

export default TodoItem;