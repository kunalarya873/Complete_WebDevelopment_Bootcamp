import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "Todo msg",
            completed: false,
        },
        
    ],
    addTodo:(todo) =>{},
    updatedTo:(id, todo) =>{},
    deletdTodo:(id)=>{},
    toggleCompleted:(id) =>{}

})

export const useTodo = ()=> {
    return useContext(TodoContext)
}
export const Todoprovider = TodoContext.Provider