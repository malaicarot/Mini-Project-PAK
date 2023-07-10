import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faTrash,
  faPen,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
const ToDoItem = (props) => {
  const {toDo, deleteToDo, selectEditingToDo} = props;
  const { id, title, status, } = toDo || {};
  return (
    <ul className="taskBg">
      <div>
        <li className="taskText">{title}</li>
      </div>

      <li className=""><FontAwesomeIcon icon={faSquare}/></li>
      <li className="" onClick={()=> deleteToDo(id)}><FontAwesomeIcon icon={faTrash}/></li>
      <li className="" onClick={()=> selectEditingToDo(id)}><FontAwesomeIcon icon={faPen}/></li>
      <li className=""><FontAwesomeIcon icon={faPalette}/></li>
    </ul>
  );
};

export default ToDoItem;
