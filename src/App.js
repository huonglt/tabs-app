import "./App.css";
import Tabs from "./components/tabs/Tabs";
import Tab from "./components/tabs/Tab";
import TabPanel from "./components/tabs/TabPanel";

function App() {
  return (
    <div className="App">
      <div>
        <Tabs>
          <Tab label="ITEM ONE" value="1"></Tab>
          <Tab label="ITEM TWO" value="2"></Tab>
          <Tab label="ITEM THREE" id="3"></Tab>
          <TabPanel value="1">Content of tab 1</TabPanel>
          <TabPanel value="2">Content of tab 2</TabPanel>
          <TabPanel value="3">Content of tab 3</TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
