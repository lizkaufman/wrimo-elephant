import React, { useEffect, useState } from "react";
import "./App.css";
import * as DOMPurify from "dompurify";
import countWords from "../../libs/utils/countWords";
import TextInput from "../TextInput";

function App() {
  const [text, setText] = useState("");
  const [currentCount, setCurrentCount] = useState(0);
  //TODO: potentially refactor currentCount to be in a useReducer!

  useEffect(() => {
    const count = countWords(text);
    setCurrentCount(count);
  }, [text]);

  return (
    <div className="App">
      <h1>Current word count: {currentCount}</h1>
      <TextInput value={text} onChange={setText} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></div>
    </div>
  );
}

export default App;
