import convertHTMLToText from "./convertHTMLToText";

export default function countWords(string) {
  let text = string;
  text = convertHTMLToText(string);
  let splitText = text.split(" ");
  return splitText.length;
}
