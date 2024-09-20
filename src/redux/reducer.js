import { ADDING, DELETE, DOING, EDIT } from "./actionType";

const initialState = {
  task: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING:
      return { ...state, task: [...state.task, action.payload] };
    case DOING:
      return {
        ...state,
        task: state.task.map((el) => {
          return action.idTask == el.id ? { ...el, isDone: !el.isDone } : el;
        }),
      };
      case EDIT :
        return { ...state , task : state.task.map((el)=> {
            return action.updatedTask.id === el.id ? {...el , Description:action.updatedTask.newDescription} : el;
        })}
      case DELETE :
      return {...state ,  task: state.task.filter((el)=> { return action.idTask !== el.id})}  
    default:
      return state;
  }
};
export default reducer;
