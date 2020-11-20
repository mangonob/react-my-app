import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Playground } from "./pages/palyground";

function App() {
  return <Playground></Playground>;
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
