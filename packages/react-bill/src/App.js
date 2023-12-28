import { useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('http://localhost:8888/takeaway')
  })

  return <div className="App">This is a App</div>
}

export default App
