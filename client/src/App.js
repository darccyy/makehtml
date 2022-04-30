import { useEffect, useState } from "react";

import "./App.scss";

export default function App() {
  const [serverMessage, setServerMessage] = useState(null);
  useEffect(() => {
    fetch("./api/test")
      .then(res => res.json())
      .then(json => setServerMessage(json.msg))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>React Express App</h1>
      <p>
        Server message:{" "}
        <span className="msg">{serverMessage || "Loading..."}</span>
      </p>
    </div>
  );
}
