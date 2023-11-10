import React, { useState, useEffect } from "react";
import Modalpopup from "./modal";
import MyCard from "./card";
import { useDispatch, useSelector } from 'react-redux';
import { Create } from '../redux/TodoSlice';

const CreateToDolist = () => {
  const [modal, setmodal] = useState(false);
  const dispatch = useDispatch();
  
  // Retrieve data from local storage on page load
  // useEffect(() => {
  //   const localData = JSON.parse(localStorage.getItem('tasks')) ;
  //   dispatch(Create(localData)); // Dispatch a create action with the data
  // }, []);

  const todoItems = useSelector((state) => state.todo);

  const toggle = () => setmodal(!modal);



  return (
    <>
      <div className="header text-center">
        <h3>ToDo List</h3>
        <button className="btn btn-primary" onClick={toggle}>Create Task</button>
      </div>
      <div className="task-container">
        {todoItems.length > 0 ? 
        (
          todoItems.map((obj, index) => (
            <MyCard key={index} taskobj={obj} index={index} />
          ))
        ) :
        (
          <p>No tasks to display.</p>
        )}
      </div>
      <Modalpopup modal={modal} toggle={toggle} todoItems={todoItems} />
    </>
  );
}

export default CreateToDolist;
