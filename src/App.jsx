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
  
console.log(selector);


let addTodoInGlobalState=()=>{

// console.log(todoValue.current.value)

dispatch(addTodo({
  title:todoValue.current.value,
}))


todoValue.current.value =''
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


<h1 style={{
  textAlign:"center"
}}> Todo App</h1>

<div style={{
  margin:"auto",
  textAlign:"center"
}}>

<input type="text" placeholder='Enter todo' ref={todoValue} /> <br /><br />

<button onClick={()=>addTodoInGlobalState()}>Add Todo</button>

</div>

<ul style={{
  listStyle:"none",
  margin:"auto",
  marginTop:"2rem",
  width:"35vw",
  textAlign:"center"
}}>
  {selector.length > 0 ? selector.map((item,index)=>{
    return <li style={{
      marginTop:"1rem",
      textAlign:"center"
    }} key={item.id}>{item.title}
          <button onClick={()=>{deleteItemFromGlobalState(index)}}
            style={{
              marginLeft:"0.5rem",
              textAlign:"center"
            }}>delete</button>
          <button onClick={()=>{editTodoInGlobalState(index)}} style={{
  marginLeft:"0.5rem",
  textAlign:"center"
}}>Update</button></li>

  }): <h1 style={{
    margin:"auto",
    textAlign:"center"
  }}>Not found</h1> }
</ul>



</>
  )
}

export default App