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
      <main>
        <div className="container my-5">
          <Game />
        </div>
      </main>
      <footer>
        <div className="w-100 bg-dark text-white">
          <div className="container py-3">
            <span>
              Coded by
              <a
                className="mx-1"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/mhdabdelrhman"
              >
                mhdabdelrhman
              </a>
            </span>
            <span>, @Year {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
