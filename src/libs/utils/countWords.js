import convertHTMLToText from "./convertHTMLToText";

export default function countWords(string) {
  let text = string;
  if (string[0] === "<") {
    text = convertHTMLToText(string);
  }

  let splitText = text.split(" ");

  splitText = splitText.filter((word) =>
    word === "" || word === "\n" ? false : true
  );

  console.log(splitText);
  return splitText.length;
}
