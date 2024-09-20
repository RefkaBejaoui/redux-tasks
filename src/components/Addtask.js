import { useDispatch} from "react-redux";
import { adding } from "../redux/actions";
import { useState } from "react";


function AddTask() {
  const [description, setTask] = useState("");
  const dispatch = useDispatch();
  

  const added = () => {
    let newTask = {
      id: Math.random(50),
      Description: description,
      isDone: false,
    };
    if(description===""){
alert("add task befor")
    }
   else{ dispatch(adding(newTask))
    setTask("")
   };
  };

  return (
    <>
      <input onChange={(e) => setTask(e.target.value)} value={description} type="text"  placeholder="add new task"/>
      <button
        onClick={(e) => {
          e.preventDefault();
          added();
          
        }}>
        Add
      </button>
      
    </>
  );
}

export default AddTask;
