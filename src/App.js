import "./App.css";
import { test } from "./customer/components/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{test()}</p>
      </header>
    </div>
  );
}

export default App;
