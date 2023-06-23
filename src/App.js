import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        const title = React.createElement("h1", null, "Hello world!");
        const link = React.createElement("a", { href: "//reactjs.org" }, "Read more");
        const group = React.createElement("div", null, title, link);
        const domElement = document.getElementById("root"); ReactDOM.createRoot(domElement).render(group);
      </header>
    </div>
  );
}

export default App;
