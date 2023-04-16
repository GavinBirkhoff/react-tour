import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// setState 数据同步/异步
import FuncCom from "./fixtures/state/FuncCom"
import ClassCom from "./fixtures/state/ClassCom"
// useTransition
import Transition from "./fixtures/transition/Transition"
import Search from './fixtures/transition/Search'
import NoTransition from "@/fixtures/transition/NoTransition"
// suspense
import MySuspense from "./fixtures/suspense"

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
      <Search/>
      <h3>NoTransition</h3>
      <NoTransition></NoTransition>
      <h3>Suspense</h3>
      <MySuspense />
    </div>
  )
}

export default App
