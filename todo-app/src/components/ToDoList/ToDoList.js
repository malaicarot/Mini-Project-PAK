import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem';
const ToDoList = (props) => {
  const {data, deleteToDo, selectEditingToDo} = props;
  const toDoTaBle = data.map((toDo, index) => {
    return(
      <ToDoItem toDo={toDo} deleteToDo={deleteToDo} selectEditingToDo={selectEditingToDo} key={toDo.id}/>
    )
  });

  return (
    <div>
      {toDoTaBle}
    </div>
  )
}

export default ToDoList