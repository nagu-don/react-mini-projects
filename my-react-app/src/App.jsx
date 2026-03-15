import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StopWatch from './StopWatch.jsx'
import Home from './Home.jsx'
import TodoList from './TodoList.jsx'
import AluCross from './AluCross.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/StopWatch' element={<StopWatch/>}></Route>
          <Route path='/TodoList' element={<TodoList/>}></Route>
          <Route path='/Alu-Cross' element={<AluCross/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
