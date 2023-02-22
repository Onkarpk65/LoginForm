import React from 'react'
import Header from './components/Header'

// import CreateAccount from './components/CreateAccount'
import LoginPage from './components/LoginPage'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <LoginPage />
      </>
    )
  }
}

export default App
