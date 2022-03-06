import "./App.css";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import TabPanel from "./components/TabPanel";

function App() {
  return (
    <div className="App">
      <div>
        <Tabs>
          <Tab label="ITEM ONE" value="1"></Tab>
          <Tab label="ITEM TWO" value="2"></Tab>
          <Tab label="ITEM THREE" value="3"></Tab>
          <TabPanel value="1">Content of tab 1</TabPanel>
          <TabPanel value="2">Content of tab 2</TabPanel>
          <TabPanel value="3">Content of tab 3</TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
