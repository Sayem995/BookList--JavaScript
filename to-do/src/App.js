import React, { useState } from 'react';
import './App.css';


const TodoList = () => { 
  const [ todos, setTodos] = 
  useState(['hello sayem']);
  const [task,setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value)
  }
  
  const addItem = () => { 
    setTodos([...todos,task])
 
  }

  return (
    <div className="todolistMain"> 
      <header className= "App-header">
        <p>React Todo List</p>
      </header>
      <div className="header">
        
          <input class="placeholder" onChange={onChange}  placeholder="enter task"/>
          <button  onClick={addItem} type="submit" id="btn">Add</button>
       {
                  todos.map((list)=> {
                 return <div class="table">
                   <table>
                   <tr>
                     <li>{list}</li>
                   </tr>
                   </table>
                   </div>
                })
              }
      </div>     
    </div>
    
    
  )      
}

 
export default TodoList
