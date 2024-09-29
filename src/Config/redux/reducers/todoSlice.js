import { createSlice, nanoid } from "@reduxjs/toolkit";



const todoSlice = createSlice(
    {
        name:"Todos",
        initialState:{
            todo : []
        },
        reducers:{
            addTodo:(state , action) =>{
state.todo.push({
    title:action.payload.title,
    id:nanoid()
})
            },
            removeTodo: (state , action) => {
    state.todo.splice(action.payload.index , 1)
            },
            editTodo:(state , action) =>{
const {index ,updateVal } = action.payload

                if (state.todo[index]) {
                    state.todo[index].title = updateVal 
                }   }
        }
    
    
    
    })
export const {addTodo , removeTodo , editTodo} = todoSlice.actions

export default todoSlice.reducer 
