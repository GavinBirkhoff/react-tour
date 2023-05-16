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
import ArtistApp from "./fixtures/suspense/ArtistApp/ArtistApp"
// useDeferred
import MyDeferred from './fixtures/deferred'
import { Log ,PasswordField} from './fixtures/id'
import BaseLayout from './layout/BaseLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BaseLayout />
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
      <ArtistApp />
      <h3>deferred</h3>
      <MyDeferred />
      <h3>useId</h3>
      <Log></Log>
      <PasswordField/>
      <PasswordField/>
    </div>
  )
}

export default App
