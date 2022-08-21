import logo from "./yello.gif";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/Nikoteenie/dictionary-shecodes.git"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code{" "}
          </a>
          by Nicole Brodkin
        </footer>
      </div>
    </div>
  );
}
