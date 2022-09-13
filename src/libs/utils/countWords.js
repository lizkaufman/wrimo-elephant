import convertHTMLToText from "./convertHTMLToText";

export default function countWords(string) {
  let text = string;
  text = convertHTMLToText(string);
  let splitText = text.split(" ");
  splitText = splitText.filter((word) => (word === "" ? false : true));
  // return splitText.length;
}
