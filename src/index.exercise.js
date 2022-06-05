// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

import {Logo} from './components/logo'

const LoginForm = ({buttonText, onSubmit}) => {
  const handleSubmit = event => {
    event.preventDefault()
    const {username, password} = event.target.elements
    onSubmit({username: username.value, password: password.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

const App = () => {
  const [currentModal, setCurrentModal] = React.useState('none')

  const getModalUpdater = modalToOpen => () => setCurrentModal(modalToOpen)

  const closeModal = getModalUpdater('none')

  const login = formData => {
    console.log('login', formData)
  }

  const register = formData => {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={getModalUpdater('login')}>Login</button>
      </div>
      <div>
        <button onClick={getModalUpdater('register')}>Register</button>
      </div>
      <Dialog
        isOpen={currentModal === 'register'}
        onDismiss={closeModal}
        aria-label="Registration form"
      >
        <button onClick={closeModal}>Close</button>
        <h4>Register</h4>
        <LoginForm buttonText="Register" onSubmit={register} />
      </Dialog>
      <Dialog
        isOpen={currentModal === 'login'}
        onDismiss={closeModal}
        aria-label="Login form"
      >
        <button onClick={closeModal}>Close</button>
        <h4>Login</h4>
        <LoginForm buttonText="Login" onSubmit={login} />
      </Dialog>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
