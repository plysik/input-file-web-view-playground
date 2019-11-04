import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Testujemy <code>{`<input type="file"/>`}</code>
                </p>
                <p>
                    <label htmlFor="base">Base</label>{" "}
                    <input type="file" name="base" id="base" />
                </p>
                <p>
                    <label htmlFor="multiple">Multiple</label>{" "}
                    <input type="file" name="multiple" id="multiple" multiple />
                </p>
                <p>
                    <label htmlFor="multipleWithAccept">
                        Multiple with accept
                    </label>{" "}
                    <input
                        type="file"
                        name="multipleWithAccept"
                        id="multipleWithAccept"
                        multiple
                        accept=".doc,.pdf,.docx,.rtf,.txt,.xls,.ppt,.bmp,.gif,.jpg,.png,.odt,.odp,.ods,.xlsx,.pptx,.pages,.csv,.mp3"
                    />
                </p>
                <p>
                    <label htmlFor="onlyAccept">Only accept</label>{" "}
                    <input
                        type="file"
                        name="onlyAccept"
                        id="onlyAccept"
                        accept=".doc,.pdf,.docx,.rtf,.txt,.xls,.ppt,.bmp,.gif,.jpg,.png,.odt,.odp,.ods,.xlsx,.pptx,.pages,.csv,.mp3"
                    />
                </p>
                <p>
                    <label htmlFor="acceptAll">Accept all</label>{" "}
                    <code>accept="*"</code>{" "}
                    <input
                        type="file"
                        name="acceptAll"
                        id="acceptAll"
                        accept="*"
                    />
                </p>
            </header>
        </div>
    );
}

export default App;
