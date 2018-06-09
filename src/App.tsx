import React from "react";

import { css } from "emotion";
import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    const header = css`
      background-color: darkgray;
    `;
    return (
      <div
        className={css`
          max-width: 400px;
          text-align: center;
        `}
      >
        <header className={header}>
          <img
            src={logo}
            className={css`
              width: 80px;
            `}
            alt="logo"
          />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
