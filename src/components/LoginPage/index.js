import React from 'react'
import CreateAccount from '../CreateAccount'
import './index.css'

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
    onClick: false,
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitLoginForm = event => {
    event.preventDefault()
  }

  onClickCreateNewAccount = () => {
    this.setState(prevState => ({
      onClick: !prevState.onClick,
    }))
  }

  render() {
    const {username, password, onClick} = this.state
    return (
      <div className="login-page-card-container">
        {onClick ? (
          <CreateAccount />
        ) : (
          <div className="login-page">
            <form className="form-login" onSubmit={this.onSubmitLoginForm}>
              <h1 className="login-form-heading">Login Form</h1>
              <div className="input-container">
                <label className="label" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  className="checkbox-form"
                  id="username"
                  value={username}
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="checkbox-form"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="btn-container">
                <button type="submit" className="submit-btn login-btn">
                  Login
                </button>
                <button
                  type="button"
                  className="submit-btn create"
                  onClick={this.onClickCreateNewAccount}
                >
                  Create a new Account
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}
export default LoginPage
