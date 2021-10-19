// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  buttonStatus = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.buttonStatus()

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          className="button"
          onClick={this.onClickSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
