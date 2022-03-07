import "./App.css";
import React, { useState } from "react";
import SimpleTabGroup from "./components/sample/SimpleTabGroup";
import MultiTabGroup from "./components/sample/MultipTabGroup";
import TabGroupWithLink from "./components/sample/TabGroupWithLink";

function App() {
  const [sample, setSample] = useState("simple");

  const simpleSampleClick = () => setSample("simple");
  const multiSampleClick = () => setSample("multi");
  const linkSampleClick = () => setSample("link");

  return (
    <div className="App">
      <div className="appContainer">
        <div className="leftPane">
          <div
            onClick={simpleSampleClick}
            className={sample === "simple" ? "selected" : null}
          >
            Simple Tab Groups
          </div>
          <div
            onClick={multiSampleClick}
            className={sample === "multi" ? "selected" : null}
          >
            Multi Tab Groups
          </div>
          <div
            onClick={linkSampleClick}
            className={sample === "link" ? "selected" : null}
          >
            Tab Groups With Link To Tab
          </div>
        </div>
        <div className="rightPane">
          {sample === "simple" && <SimpleTabGroup />}
          {sample === "multi" && <MultiTabGroup />}
          {sample === "link" && <TabGroupWithLink />}
        </div>
      </div>
    </div>
  );
}

export default App;
