import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// setState 数据同步/异步
import FuncCom from "./fixtures/state/FuncCom"
import ClassCom from "./fixtures/state/ClassCom"
// useTransition
import Transition from "./fixtures/transition/Transition"
import NoTransition from "@/fixtures/transition/NoTransition"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3>FuncCom</h3>
      <FuncCom></FuncCom>
      <h3>ClassCom</h3>
      <ClassCom></ClassCom>
      <h3>Transition</h3>
      <Transition></Transition>
      <h3>NoTransition</h3>
      <NoTransition></NoTransition>
    </div>
  )
}

export default App
