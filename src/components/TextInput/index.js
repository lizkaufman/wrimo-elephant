import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import css from "./textInput.module.css";
import { modules, formats } from "../../libs/config";

function TextInput({ onChange, value }) {
  return (
    <div id={css.textInput}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}

export default TextInput;
