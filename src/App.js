import "./App.css";
import Tabs from "./components/tabs/Tabs";
import Tab from "./components/tabs/Tab";
import TabPanel from "./components/tabs/TabPanel";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Tabs>
          <Tab label="ITEM ONE" value="1"></Tab>
          <Tab label="ITEM TWO" value="2"></Tab>
          <Tab label="ITEM THREE" value="3"></Tab>
          <TabPanel value="1">
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <span>A span</span>
            <button>A button</button>
          </TabPanel>
          <TabPanel value="2">Content of tab 2</TabPanel>
          <TabPanel value="3">Content of tab 3</TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
