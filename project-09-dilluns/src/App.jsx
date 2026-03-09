import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

const [currentView, setCurrentView] = useState();
function App() {
 return (
    <>
      <div>
        <Sidebar/>
        <main></main>
      </div>
    </>
  )
}

export default App;
