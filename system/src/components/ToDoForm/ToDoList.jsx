import { SInput } from "./ToDoList.styles";
import { useState } from "react";

const ToDoList = () => {

  const [ text, setText ] = useState("")

  const onFormSubmit = () => {

  }

  const onInputChange = (e) => {
    setText(e.target.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <SInput
        placeholder="Criar nova tarefa..."
      />
    </form>
  )
}

export default ToDoList;