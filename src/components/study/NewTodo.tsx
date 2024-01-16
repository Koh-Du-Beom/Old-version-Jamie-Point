import { useRef } from "react";
import classes from '../styles/NewTodo.module.css'
const NewTodo: React.FC<{onAddTodo : (text: string) => void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event : React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; //!.는 절대 null이 아니라는 걸 확신

    if (enteredText.trim().length === 0){
      //throw an error
      return;
    }

    props.onAddTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;