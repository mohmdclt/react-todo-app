import './App.css'
import {useState} from "react"

function App() {
  const [Todos, setTodos] = useState([]);
  const [Todo, setTodo] = useState('');
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div  className="input">
        <input value={Todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...Todos,Todo])} className="fas fa-plus"></i>

        {console.log(Todo,Todos)}
      </div>
      <div className="todos">
        { Todos.map((obj)=>{

       return( <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{obj}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)})}
      </div>
    </div>
  );
}

export default App;
