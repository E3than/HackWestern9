import './App.css';
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Detect bots with ease</h1>
        <h2>Input URL To Find Bots</h2>
        <form>
          <input type="text"></input>
          <button type="submit">Find Bots</button>
        </form>
      </div>
    </div>
  );
}

export default App;
