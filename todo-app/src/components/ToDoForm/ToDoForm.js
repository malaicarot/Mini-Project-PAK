import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = (props) => {
  const { addToDo, updateToDo, initialValues, toDoList } = props;
  const [toDo, setToDo] = useState('');
  useEffect(() => {
    const toDoItemEditing = toDoList.find(initialValues);
    setToDo(toDoItemEditing ? toDoItemEditing.title: "");
  }, [initialValues]);



  const onChangHandler = (e) => {
    setToDo(e.target.value);
  };

  const onAddSubmitHandler = (e) => {
    e.preventDefault();
    const newToDo = {
      id: uuidv4(),
      title: toDo,
      status: false,
    };
      addToDo(newToDo);
      setToDo('');
  };
  const onEditSubmitHandler = (e) => {
    e.preventDefault();
    updateToDo(toDo);
      setToDo('');
  };
  return (
    <div>
      <form onSubmit={!initialValues ? onAddSubmitHandler : onEditSubmitHandler}>
        <input 
        type="text"
        onChange={onChangHandler} 
        placeholder="New Task" 
        value={toDo}
        />
        <button type="submit">
          {!initialValues ? "Add" : "Edit"}
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
