import { ADDING, DOING, EDIT, DELETE } from "./actionType"

export const adding = (payload) => {
    return {type : ADDING , payload }
}

export const doing = (idTask) =>{
    return{type: DOING , idTask}
}

export const edit = (updatedTask) => {
    return { type: EDIT ,  updatedTask}
}

export const deleteTask = (idTask) => {
    return { type : DELETE , idTask}
}