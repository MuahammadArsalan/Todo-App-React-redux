import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo ,editTodo } from './Config/redux/reducers/todoSlice'

const App = () => {

let [input,setInput] = useState('')

let todoValue = useRef()


// dispatch (means send data )

let dispatch = useDispatch()


// selector (means get data )


const selector = useSelector(state => state.todos.todo)
  // const selector = useSelector(state => state.todos.todo);

console.log(selector);


let addTodoInGlobalState=()=>{

// console.log(todoValue.current.value)

dispatch(addTodo({
  title:todoValue.current.value,
}))


setInput('')
}


let deleteItemFromGlobalState =(index)=>{


  console.log(index);
  
dispatch(removeTodo({
  index
}))

}



let editTodoInGlobalState =(index)=>{
let updateVal = prompt('Enter value')

  console.log(index);
  if(updateVal)
dispatch(editTodo({
  index,
  updateVal,
}))

}


  return (

<>


<h1>Todo App</h1>

<div>

<input type="text" placeholder='Enter todo' ref={todoValue} /> <br />

<button onClick={()=>addTodoInGlobalState()}>Add Todo</button>

</div>

<ul>
  {selector.length > 0 ? selector.map((item,index)=>{
    return <li key={item.id}>{item.title}
          <button onClick={()=>{deleteItemFromGlobalState(index)}}>delete</button>
          <button onClick={()=>{editTodoInGlobalState(index)}}>Update</button></li>

  }): <h1>Not found</h1> }
</ul>



</>
  )
}

export default App