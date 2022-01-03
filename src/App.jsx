import "./App.css";
import NavButtons from "./components/NavButtons";

function App() {
  return (
    <div className="App">
      <header className="App_header"></header>

      <div className="navbar">
        <div className="navbar-nav">
          <img className="logo" src="./img/shield.svg" alt="shield-img" />
          <NavButtons />
          <NavButtons />
          <NavButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
