import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <p>Paragraph</p>
          </div>
        </div>
      </>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.body);
