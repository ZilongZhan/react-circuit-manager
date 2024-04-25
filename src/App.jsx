import { Footer } from "./shared";
import { BlackButton, RedButton } from "./shared";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main className="main">
        <h1>Home</h1>
        <BlackButton src="/about" text="About" />
        <RedButton src="/contact" text="Contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
