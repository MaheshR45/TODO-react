import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Create } from '../redux/TodoSlice';


const  Modalpopup=({modal,toggle,todoItems})=> {
    const [taskname,settaskname]=useState('')
    const [description,setdescription]=useState('')
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "taskName") {
          settaskname(value);
        } else {
          setdescription(value);
        }
      }
    
      const handleSave = (e) => {
        e.preventDefault();
    
        // Check if either the task name or description is empty
        if (!taskname.trim() || !description.trim()) {
          alert('Please fill in both task name and description.');
          return;
        }
    
        const taskobj = {
          Name: taskname,
          Description: description,
        };
    
        // Dispatch the create action to add the task to Redux
        dispatch(Create(taskobj));
    
        // Save the updated tasks to local storage
        // const updatedTasks = [...todoItems, taskobj];
        // localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
        // Clear the form fields after saving the task
        settaskname('');
        setdescription('');
    
        toggle();
      };
      
    return (
        <div>
               <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>
                       Create Task
                    </ModalHeader>
                    <ModalBody>
                       <form>
                        <div className='form-group'>
                            <label>Task Name</label>
                            <input type='text' className='form-control' value={taskname} onChange={handleChange} name='taskName'></input>
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textarea rows="5" className='form-control' value={description} onChange={handleChange} name='description'></textarea>
                        </div>
                       </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleSave}>
                           Create
                        </Button>
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
        </div>
    );
}

export default Modalpopup;