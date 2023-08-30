import { useState } from "react";
import githubLogo from "../public/github.png";
import logoDS from "../public/images.png";
import "./App.css";
import linkedinLogo from "../public/linkedinLogo.png";
import Button from "./components/Button";
import Outcome from "./components/Outcome";
import ButtonReduce from "./components/ButtonReduce";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <>
      <div>
        <a href="https://courses.devstock.tv/" target="_blank">
          <img src={logoDS} className="logo" alt="Devstock logo" />
        </a>
        <a href="https://github.com/BartoszKrysztofik/ReactNo1" target="_blank">
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
      </div>
      <h1>Pierwsze zadanie React</h1>
      <div className="card">
        <Button setCount={setCount} />
        <ButtonReduce setCount={setCount} />
        <Outcome count={count} />
      </div>
      <p className="read-the-docs">
        Click on the Devstock logo to learn with us
      </p>
      <p className="read-the-docs">
        Click on the Github logo to view the repository
      </p>
      <h6 class="myName">
        Realizacja: Bartosz Krysztofik
        <a
          href="https://pl.linkedin.com/in/bartosz-krysztofik-858888284"
          target="_blank"
        >
          <img
            src={linkedinLogo}
            className="logo-linkedin"
            alt="LinkedIn logo"
          />
        </a>
      </h6>
    </>
  );
}

export default App;
