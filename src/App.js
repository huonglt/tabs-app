import "./App.css";
import React, { useRef } from "react";
import SimpleTabGroup from "./components/sample/SimpleTabGroup";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <div className="leftPane">
          <div>Simple Tab Groups</div>
          <div>Multi Tab Groups</div>
          <div>Tab Groups with Link to tab</div>
        </div>
        <div className="rightPane">right pane</div>
      </div>
    </div>
  );
}

export default App;
