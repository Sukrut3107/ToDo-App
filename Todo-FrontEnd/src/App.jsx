import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import { TodoCreate } from './comp/TodoCreate'
import { TodoRender } from './comp/TodoRender'

function App() {
  const [todos,setTodos] = useState([]);

  return (
    <div>
     <TodoCreate></TodoCreate>
     <TodoRender todos={[
   
      
     ]}></TodoRender>
    </div>
  )
}

export default App
