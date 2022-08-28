import React, { useState } from "react";
import "./App.css";

import * as DOMPurify from "dompurify";

import TextInput from "../TextInput";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <TextInput value={text} onChange={setText} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></div>
    </div>
  );
}

export default App;
