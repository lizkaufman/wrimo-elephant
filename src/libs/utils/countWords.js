import convertHTMLToText from "./convertHTMLToText";

export default function countWords(string) {
  let text = string;
  console.log({ html: text });
  if (string[0] === "<") {
    text = convertHTMLToText(string);
  }
  console.log({ converted: text });

  let splitText = text.split(" ");
  console.log(splitText);

  splitText = splitText.filter((word) => (word === "" ? false : true));
  console.log(splitText.length);
  return splitText.length;
}
