import "./App.css";
import React, { useState } from "react";
import SimpleTabGroup from "./components/sample/SimpleTabGroup";
import TabGroups from "./components/sample/TabGroups";
import TabGroupWithLink from "./components/sample/TabGroupWithLink";

function App() {
  const [sample, setSample] = useState("simple");

  const simpleSampleClick = () => setSample("simple");
  const multiSampleClick = () => setSample("multi");
  const linkSampleClick = () => setSample("link");

  return (
    <div className="App">
      <div className="title">
        A demo of tab groups with WAI ARIA specification
      </div>
      <div className="subTitle">Select a demo on the left to start</div>
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
          {sample === "multi" && <TabGroups />}
          {sample === "link" && <TabGroupWithLink />}
        </div>
      </div>
    </div>
  );
}

export default App;
