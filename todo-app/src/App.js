import React, { useState } from 'react'
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';



const App = () => {
  // Task {ToDoList} State
  const [toDoList, setToDoList] = useState([]);

  // Temp State
  const [editingToDo, setEditingToDo] = useState(null);
  
  // Add
  const onAddNewToDo = (newToDo) => {
    setToDoList([...toDoList, newToDo]);
  }

  // Delete
  const onDeleteHandler = (id) => {
    const filteredToDoList = toDoList.filter(
      (toDo) => toDo.id !== id 
      );
      setToDoList(filteredToDoList);
  }

  // Update
  const editById = (id) => {
    setEditingToDo(id);
  };
  
  const handleEditToDo = (text) => {
    const editedToDo = {...toDoList.find(editingToDo), title: text};
    toDoList.edit(editingToDo, editedToDo);
    setToDoList(
      toDoList.map((toDo) => (toDo.id === editingToDo ? editedToDo : toDo))
    );
    setEditingToDo(null);
  };
  return (
    <div className="App">
      <ToDoForm addToDo={onAddNewToDo} updateToDo={handleEditToDo} initialValues={editingToDo} toDoList={toDoList}/>
      {toDoList && toDoList.length ? "" : "No Task"}
      <ToDoList data={toDoList} deleteToDo={onDeleteHandler} selectEditingToDo={editById}/>
      
    </div>
  );
}

export default App;
