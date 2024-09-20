import Task from "./Task";
import { useSelector } from "react-redux";
function ListTask() {

    const select = useSelector((state)=> state.task)

    return ( <>
  {select.map((element) => <Task key={element.id} {...element}/>)}
  {console.log(select)}
    </> );
}

export default ListTask;