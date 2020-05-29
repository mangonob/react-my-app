import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from "styled-components";

class MyComponent extends React.Component<{ [x: string]: any }> {
  render() {
    return <h1 className={this.props.className}>Hello world!</h1>;
  }
}

const StyledLink = styled(MyComponent)`
  color: red;
  background-color: yellow;
`;

class App extends React.Component {
  render() {
    return (
      <>
        <StyledLink />
      </>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
