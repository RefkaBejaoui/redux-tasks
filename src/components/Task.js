import { useDispatch } from "react-redux";
import { deleteTask, doing } from "../redux/actions";
import Edit from "./Edit";


function Task({id,Description, isDone}) {
    const dispatch = useDispatch()
    const done = ()=>{
        dispatch(doing(id))
    }

    const deleted = ( ) => {
        dispatch(deleteTask(id))
    }
    
    return ( <>
    
   {isDone ? (
    <h3 className="done">{Description}</h3>
   ) : <h3 >{Description}</h3> }
    <Edit id = {id} Description= {Description} isDone={isDone}/>
    <button  onClick={deleted}>Delete</button>
    
    <button onClick={done} >{isDone ? "undone": "done"}</button>
    </> );
}

export default Task;