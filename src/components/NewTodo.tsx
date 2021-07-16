import React, {useRef, useContext} from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
const todosCtx = useContext(TodosContext)

// we use HTMLInputElement as its the built in method for inputs
const todoTextInputRef = useRef<HTMLInputElement>(null);

const SubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

// this question mark at the end was automatically added by the ide
// beacuse the ref at this point isnt set to a value yet
// we can use a ! rather than ? if we know the connection has been established
    const enteredText = todoTextInputRef.current!.value;

    //validate the entered text
    if (enteredText.trim().length === 0) {
        // we could throw an error here if we wated to 
        return;
    }

    todosCtx.addTodo(enteredText);
};

  return (
    <form onSubmit={SubmitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
