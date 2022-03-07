import "./App.css";
import React, { useState } from "react";
import SimpleTabGroup from "./components/sample/SimpleTabGroup";
import MultiTabGroup from "./components/sample/MultipTabGroup";

function App() {
  const [sample, setSample] = useState("simple");

  const simpleSampleClick = () => setSample("simple");
  const multiSampleClick = () => setSample("multi");

  return (
    <div className="App">
      <div className="appContainer">
        <div className="leftPane">
          <div onClick={simpleSampleClick}>Simple Tab Groups</div>
          <div onClick={multiSampleClick}>Multi Tab Groups</div>
          <div>Tab Groups with Link to tab</div>
        </div>
        <div className="rightPane">
          {sample === "simple" && <SimpleTabGroup />}
          {sample === "multi" && <MultiTabGroup />}
        </div>
      </div>
    </div>
  );
}

export default App;
