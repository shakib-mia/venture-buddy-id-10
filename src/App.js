import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="d-flex flex-row app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
