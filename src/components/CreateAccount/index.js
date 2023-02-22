import React from 'react'
import {v4 as uuidv4} from 'uuid'
import Loader from 'react-loader-spinner'
import ThankYou from '../ThankYou'
import './index.css'

class CreateAccount extends React.Component {
  state = {
    accountsList: [],
    username: '',
    password: '',
    email: '',
    companyName: '',
    dateOfBirth: '',
    age: '',
    isLoading: true,
    isLogout: false,
    errorMsg: '',
  }

  onChangeUsernameInput = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeEmailInput = event => {
    this.setState({
      email: event.target.value,
    })
  }

  onChangeCompanyNameInput = event => {
    this.setState({
      companyName: event.target.value,
    })
  }

  onChangeAgeInput = event => {
    this.setState({
      age: event.target.value,
    })
  }

  onChangeDateOfBirthInput = event => {
    this.setState({
      dateOfBirth: event.target.value,
    })
  }

  onClickLogout = () => {
    this.setState({
      isLogout: true,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      username,
      password,
      email,
      companyName,
      dateOfBirth,
      age,
    } = this.state
    const userObject = {
      id: uuidv4(),
      username,
      password,
      email,
      companyName,
      dateOfBirth,
      age,
    }
    if (
      username === '' ||
      password === '' ||
      email === '' ||
      companyName === '' ||
      dateOfBirth === '' ||
      age === ''
    ) {
      this.setState({
        errorMsg: 'Please Enter Valid Credentials',
      })
    } else {
      this.setState(prevState => ({
        accountsList: [...prevState.accountsList, userObject],
        isLoading: false,
      }))
    }
  }

  onRenderSpinner = () => (
    <Loader type="TailSpin" width={60} height={60} color="orange" />
  )

  renderFormContainer = () => {
    const {
      username,
      password,
      email,
      companyName,
      dateOfBirth,
      age,
      errorMsg,
    } = this.state

    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <h1 className="registration-heading">SignUp Form</h1>
        <div className="input-container">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="checkbox"
            id="username"
            value={username}
            placeholder="Username"
            onChange={this.onChangeUsernameInput}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="checkbox"
            id="password"
            value={password}
            placeholder="Password"
            onChange={this.onChangePasswordInput}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="checkbox"
            id="email"
            value={email}
            placeholder="Email"
            onChange={this.onChangeEmailInput}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            className="checkbox"
            id="companyName"
            placeholder="Company name"
            value={companyName}
            onChange={this.onChangeCompanyNameInput}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="age">
            Age
          </label>
          <input
            type="text"
            className="checkbox"
            id="age"
            placeholder="Age"
            value={age}
            onChange={this.onChangeAgeInput}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="dob">
            Date of Birth
          </label>
          <input
            type="date"
            className="checkbox"
            id="dob"
            value={dateOfBirth}
            onChange={this.onChangeDateOfBirthInput}
          />
        </div>
        <button type="submit" className="submit-btn">
          Create Account
        </button>
        {errorMsg && <p className="error">{errorMsg}</p>}
      </form>
    )
  }

  renderThankYouPage = () => {
    const {username, isLogout} = this.state

    return (
      <>
        {isLogout ? (
          this.renderFormContainer()
        ) : (
          <ThankYou username={username} onClickLogout={this.onClickLogout} />
        )}
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="login-page-container">
        {isLoading ? this.renderFormContainer() : this.renderThankYouPage()}
      </div>
    )
  }
}

export default CreateAccount
