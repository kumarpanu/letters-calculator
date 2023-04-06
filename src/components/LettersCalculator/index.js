import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onEnterLetters = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="inside-container">
          <div className="total-text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <p className="enter-text">Enter the phrases</p>
            <input
              type="search"
              className="user-input"
              placeholder="Enter the phrase"
              onChange={this.onEnterLetters}
            />
            <p className="letters-text">No.of letters:{count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-styling"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
