import './App.css';
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Input URL to find bots</h1>
        <form>
          <input type="text"></input>
          <button type="submit">find bots</button>
        </form>
      </div>
    </div>
  );
}

export default App;
