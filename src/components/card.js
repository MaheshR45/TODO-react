import React,{useState} from 'react';
import { Card, CardBody, CardFooter, CardTitle, CardText, Button } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Editpopup from './edittask';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '../redux/TodoSlice';


const MyCard = ({ taskobj, index }) => {
    const [modal,setmodal]=useState(false)
    const dispatch = useDispatch();
    
    const toggle=()=>{
        setmodal(!modal)
    }
    const deleteTask=(index)=>{
      dispatch(Delete(index))
    }
    

  const cardStyles = {
    width: '18rem',
    margin: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for the card
    border: '1px solid lightgray',
    borderTop: `5px solid ${getBorderColor(index)}`, // Different top border colors based on index
  };

  const titleStyle = {
    backgroundColor: 'lightblue',
    padding: '10px',
    marginBottom: '15px',
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  function getBorderColor(index) {
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    return colors[index % colors.length];
  }

  return (
    <div>
    <Card body style={cardStyles}>
      <div style={titleStyle}>
        <CardTitle tag="h5">{taskobj.Name}</CardTitle>
      </div>
      <CardBody>
        <CardText>{taskobj.Description}</CardText>
      </CardBody>
      <CardFooter style={footerStyle}>
        <Button color="primary" onClick={()=>setmodal(true)}>
          <FaEdit /> Edit
        </Button>
        <Button color="danger" onClick={()=>deleteTask(index)} >
          <FaTrash /> Delete
        </Button>
      </CardFooter>
    </Card>
    <div>
        <Editpopup modal={modal} toggle={toggle}  taskobj={taskobj} index={index}/>
    </div>
    </div>
  );
};

export default MyCard;
