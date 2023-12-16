import { useEffect, useState, useRef } from "react";

export default function App() {
  const [length, setLength] = useState("8");
  const [val, setVal] = useState("");
  const [numPass, setNumPass] = useState(false);
  const [charPass, setCharPass] = useState(false);

  const passwordRef = useRef(null);

  let password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const num = "1234567890";
  const character = "!@#$%()";

  const handleCopy = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(val);
  };

  const passwordFun = () => {
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += password[Math.floor(Math.random() * password.length)];

      if (numPass) password += num;

      if (charPass) password += character;
    }

    setVal(pass);
  };

  const fun = (e) => {
    setLength(e.target.value);
    // passwordFun();
  };

  useEffect(() => {
    passwordFun();
  }, [numPass, charPass, length]);

  return (
    <div className="App">
      <div className="container-big">
        <div className="text">Password Generator</div>
        <div className="container">
          <div className="copy-div">
            <input
              type="text"
              value={val}
              name="text"
              readOnly
              ref={passwordRef}
            />
            <button onClick={handleCopy}>Copy</button>
          </div>
          <div className="scroller-checkbox">
            <div className="scroller-bg">
              <input
                type="range"
                min="8"
                max="50"
                value={length}
                onChange={fun}
              />
            </div>
            <div className="length">Length({length})</div>
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => {
                  setNumPass(!numPass);
                }}
              />
              <div>Numeric</div>
              <input
                type="checkbox"
                onClick={() => {
                  setCharPass(!charPass);
                }}
              />
              <div>Character</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
