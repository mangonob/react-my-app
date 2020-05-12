import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const FancyButton = React.forwardRef((props, ref) => (
    <button className="FancyButton" ref={ref}>
      {props.children}
    </button>
))

class App extends React.Component {
  render() {
    const ref = React.createRef()
    return <FancyButton ref={ref}>
      Button
    </FancyButton>
  }
}

// ========================================

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)