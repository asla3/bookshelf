// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from 'react'
import {createRoot} from 'react-dom/client'

import {Logo} from './components/logo'

const App = () => {
  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={() => alert('You clicked the login button')}>
        Login
      </button>
      <button onClick={() => alert('You clicked the register button')}>
        Register
      </button>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
