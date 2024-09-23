import { createSlice, nanoid } from "@reduxjs/toolkit";



const todoSlice = createSlice(
    {
        name:"Todos",
        initialState:{
            todo : []
        }
    },
    reducers:{
     addTodo:(state , action ) => {
    state.todo.push({
    title : action.payload.title,
    id: nanoid()
})
     }   
    },
    removeItem: () =>{
        
        state.todo.splice(action.payload.index,1)
    }
    n
)


