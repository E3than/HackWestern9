import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div className="icon"></div>
          <div className="title">sample text</div>
          <div className="wAI-logo"></div>
        </div>
      </header>
      <div className="content">
        <form>
          <input type="text"></input>
          <button type="submit">find bots</button>
        </form>
      </div>
    </div>
  );
}

export default App;
