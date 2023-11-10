import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Update } from '../redux/TodoSlice';

const Editpopup = ({ modal, toggle, taskobj, index }) => {
  const [taskname, setTaskname] = useState(taskobj.Name);
  const [description, setDescription] = useState(taskobj.Description);
  const dispatch = useDispatch();

  useEffect(() => {
    setTaskname(taskobj.Name);
    setDescription(taskobj.Description);
  }, [taskobj]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'taskName') {
      setTaskname(value);
    } else {
      setDescription(value);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTask = {
      Name: taskname,
      Description: description,
    };
    
    console.log('Dispatching Update action with index and updatedTask:', index, updatedTask);
    dispatch(Update({ index, updatedTask }));
    toggle(); // Close the modal after updating
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
              <label>Task Name</label>
              <input type='text' className='form-control' value={taskname} onChange={handleChange} name='taskName' />
            </div>
            <div className='form-group'>
              <label>Description</label>
              <textarea rows='5' className='form-control' value={description} onChange={handleChange} name='description' />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleUpdate}>
            Update
          </Button>
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Editpopup