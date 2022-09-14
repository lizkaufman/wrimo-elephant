export default function convertHTMLToText(html) {
  let text = html;

  //Replace all tags with spaces:
  text = text.replace(/<[^>]+>/g, " ");

  //Deal with any new lines:
  text = text.replace(/\n/g, " ");
  text = text.replace(/\r/g, " ");

  //Remove extra spaces within string:
  text = text
    .split("")
    .filter((char, i) => {
      if (char === " " && text[i - 1] === " ") {
        return false;
      }
      return true;
    })
    .join("");

  //Return string without spaces at start or end:
  return text.trim();
}
