import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const showAlert = e => alert(e);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Testujemy <code>{`<input type="file"/>`}</code>
                </p>
                <p>
                    <label htmlFor="onChange">onChange</label>{" "}
                    <input
                        type="file"
                        name="onChange"
                        id="onChange"
                        onChange={showAlert}
                    />
                </p>
                <p>
                    <a
                        href="http://google.pl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        nowa karta
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
