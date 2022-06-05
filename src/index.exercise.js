// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

import {Logo} from './components/logo'

const REGISTER_DIALOG_LABEL_ID = 'register-dialog-label'

const LOGIN_DIALOG_LABEL_ID = 'login-dialog-label'

const App = () => {
  const [currentModal, setCurrentModal] = React.useState('none')

  const getModalUpdater = modalToOpen => () => setCurrentModal(modalToOpen)

  const closeModal = getModalUpdater('none')

  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={getModalUpdater('login')}>Login</button>
      <button onClick={getModalUpdater('register')}>Register</button>
      <Dialog
        isOpen={currentModal === 'register'}
        onDismiss={closeModal}
        aria-labelledby={REGISTER_DIALOG_LABEL_ID}
      >
        <h4 id={REGISTER_DIALOG_LABEL_ID}>Register</h4>
      </Dialog>
      <Dialog
        isOpen={currentModal === 'login'}
        onDismiss={closeModal}
        aria-labelledby={LOGIN_DIALOG_LABEL_ID}
      >
        <h4 id={LOGIN_DIALOG_LABEL_ID}>Login</h4>
      </Dialog>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
