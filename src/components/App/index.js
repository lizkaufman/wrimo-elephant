import React, { useState } from "react";
import "./App.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}

export default App;
