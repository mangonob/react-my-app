import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FancyBorder(props) {
  return <div className={"FancyBorder FancyBorder-" + props.color}>
    {props.children}
  </div>
}

function WelcomeDialog(props) {
  return <FancyBorder color='blue'>
    <h1 className="Dialog-title">
      Welcome
    </h1>
    <p className="Dialog-message">
      Thank you for visiting our spacecraft!
    </p>
  </FancyBorder>
}

function SplitPlane(props) {
  return <div className="SplitPlane">
    <div className="SplitPlane-left">
      {props.left}
    </div>
    <div className="SplitPlane-right">
      {props.right}
    </div>
  </div>
}

function Dialog(props) {
  return <FancyBorder color="blue">
    <h1 class-Name="Dialog-title">
      {props.title}
    </h1>
    <p class-Name="Dialog-message">
      {props.message}
    </p>
    {props.children}
  </FancyBorder>
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.state = {login: null}
  }

  handleChange(event) {
    this.setState({login: event.target.value})
  }

  handleSignup(event) {
    alert(`Welcome aboard, ${this.state.login}!`)
  }

  render() {
    return <Dialog title="Mars Exploration Program"
      message="How should we refer to you">
      <input value={this.state.login}
        onChange={this.handleChange} />
      <button onClick={this.handleSignup}>
        Sign Me Up!
      </button>
    </Dialog>
  }
}

class App extends React.Component {
  render() {
    return <SignUpDialog />
  }
}

// ========================================

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)