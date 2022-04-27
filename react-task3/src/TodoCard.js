import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
let counter = 0;

function TodoCard(props) {
    const { todo } = props;
    const { id,title} = todo;
    let {completed} = todo;
    let [value, setValue] = useState(completed);
    const navigate = useNavigate();

    function handleClickDelete(event) {
        document.getElementById(event.target.parentNode.id).remove();
        event.stopPropagation();
        counter++;

        if(counter == props.todosLength){
          window.location.reload();
          alert("To Do removed? new To Do");
        }
      }

    function handleClickToggle(event) {

        event.stopPropagation();
        if(value === false){
            setValue(true); 
        }
        else{
            setValue(false);
        }
    }

    function newPage(){
      navigate(`/todo/${id}`);
    }


  return (
    <div id= {id} onClick={newPage} style ={{ backgroundColor:"grey", padding:"10px", margin:"10px", width: "120px"}}>
        <h4> {id}</h4>
        <h4> {title}</h4>
        <h6>{`Completed: ${value}`}</h6>
        <button type="button" onClick={handleClickDelete}>Delete</button>
        <button type="button" onClick={handleClickToggle}>Toggle</button>
    </div>
  )
}

export default TodoCard