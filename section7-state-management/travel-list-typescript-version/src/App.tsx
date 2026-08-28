import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"
import "./index.css"

export type ItemObj = {
  id: number
  description: string
  quantity: number
  packed: boolean
}

function App() {

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

export default App
