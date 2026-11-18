import Steps from "./components/Steps"
import "./index.css"

const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income",
  "Learn more"
]

function App() {

  return (
    <Steps messages={messages} />
  )
}

export default App
