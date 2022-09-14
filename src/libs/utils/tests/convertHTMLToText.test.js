import convertHTMLToText from "../convertHTMLToText";

describe("successfully converts short, standard HTML string to text string without tags or additional spaces", () => {
  test("short string with just one tag", () => {
    const htmlString = `<p>I'm just one paragraph.</p>`;
    const expected = `I'm just one paragraph.`;
    const actual = convertHTMLToText(htmlString);
    expect(actual).toBe(expected);
  });

  test("short string with multiple tags", () => {
    const htmlString = `<p>I'm just one paragraph.</p><br><p>And I'm another.</p>`;
    const expected = `I'm just one paragraph. And I'm another.`;
    const actual = convertHTMLToText(htmlString);
    expect(actual).toBe(expected);
  });
});

describe("successfully converts longer HTML strings with many tags, line breaks, and extraneous spaces", () => {
  test("Longer HTML string with nested tags", () => {
    const htmlString = `<main><p>I'm just one paragraph.</p><br><p>I'm another with a <strong>bold</strong> word.</p><section><p>I'm a different paragraph.</p></section></main>`;
    const expected = `I'm just one paragraph. I'm another with a bold word. I'm a different paragraph.`;
    const actual = convertHTMLToText(htmlString);
    expect(actual).toBe(expected);
  });

  test("Longer HTML string with line breaks and indents", () => {
    const htmlString = `<main>
    <p>I'm just one paragraph.</p><br><p>I'm another with a <strong>bold</strong> word.</p>
    <section>
        <p>I'm a different       paragraph      with too          many spaces.</p>
    </section>
</main>`;
    const expected = `I'm just one paragraph. I'm another with a bold word. I'm a different paragraph with too many spaces.`;
    const actual = convertHTMLToText(htmlString);
    expect(actual).toBe(expected);
  });
});
