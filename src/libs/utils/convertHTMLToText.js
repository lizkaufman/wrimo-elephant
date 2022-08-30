export default function convertHTMLToText(html) {
  return html.replace(/<[^>]+>/g, "");
}
