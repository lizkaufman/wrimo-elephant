import React, { useState } from "react";
import "./App.css";

import TextInput from "../TextInput";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <TextInput value={text} onChange={setText} />
      <p>{text}</p>
    </div>
  );
}

export default App;
