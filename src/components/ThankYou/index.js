import './index.css'

const ThankYou = props => {
  const {username, onClickLogout} = props
  return (
    <div className="thank-you-container">
      <p className="thank-you-text">
        Thanks for logging in <span className="span"> {username} </span>
      </p>
      <button className="logout-btn" type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default ThankYou
