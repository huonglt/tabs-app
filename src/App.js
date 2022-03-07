import "./App.css";
import React, { useState } from "react";
import SimpleTabGroup from "./components/sample/SimpleTabGroup";

function App() {
  const [sample, setSample] = useState("simple");

  const simpleSampleClick = () => setSample("simple");

  return (
    <div className="App">
      <div className="appContainer">
        <div className="leftPane">
          <div onClick={simpleSampleClick}>Simple Tab Groups</div>
          <div>Multi Tab Groups</div>
          <div>Tab Groups with Link to tab</div>
        </div>
        <div className="rightPane">
          {sample === "simple" && <SimpleTabGroup />}
        </div>
      </div>
    </div>
  );
}

export default App;
