import "./App.css";
import Tree from "./components/treeview/Tree";
import treeViewData from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="treeview-container">
        <Tree data={treeViewData} />
      </div>
    </div>
  );
}

export default App;
