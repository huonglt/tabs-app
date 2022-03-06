import "./App.css";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab label="ITEM ONE" selected={false}></Tab>
        <Tab label="ITEM TWO" selected={false}></Tab>
        <Tab label="ITEM THREE" selected={false}></Tab>
      </Tabs>
    </div>
  );
}

export default App;
