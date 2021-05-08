import Game from "./components/Game";
import Logo from "./assets/logo.svg";
function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img src={Logo} alt="" width="30" height="24" />
              <span className="fw-bold">Tic-tac-toe</span>
            </a>
          </div>
        </nav>
      </header>
      <main className="my-5">
        <div className="container">
          <Game />
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
