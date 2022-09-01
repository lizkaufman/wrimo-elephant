import countWords from "../countWords";

describe("Testing countWords with standard strings", () => {
  test("correctly counts short string", () => {
    const testString = `I'm a short string.`;
    const actual = countWords(testString);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  test("correctly counts longer string", () => {
    const testString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id enim dictum, dignissim metus id, feugiat quam. Donec magna risus, iaculis a purus semper, feugiat placerat est. Curabitur facilisis, ante vitae fermentum sollicitudin, justo tellus volutpat est, in aliquet erat elit eget felis. Nullam ornare erat lectus, in tempus mauris auctor congue. Mauris bibendum tristique massa, eu pharetra est sodales sit amet. Quisque luctus consequat eros, sit amet efficitur sapien elementum ut. Proin a finibus justo. Duis scelerisque est nec vulputate posuere. Etiam id lectus in nisl pretium varius. Proin sit amet lacus lobortis, porttitor tortor vel, egestas ipsum. Fusce eu pellentesque nunc, eu tempus sapien. Suspendisse arcu tortor, pretium ac convallis sit amet, aliquet ac nulla. Proin ultrices libero mi, ut molestie eros semper sed. Cras non nulla nisi. Integer nec posuere est. Quisque dolor velit, vestibulum at mi id, congue vulputate odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi vitae lorem rutrum tellus luctus auctor in vel magna. Donec lobortis nisi non posuere interdum. Sed vel lorem ante. Vestibulum ultrices pulvinar dui, in condimentum diam fermentum at. Vestibulum non dolor at urna commodo feugiat eget id dolor. Proin id lacus pulvinar ipsum fermentum pharetra. Nullam placerat consequat aliquet. Etiam et ipsum eros. Ut eget nulla risus. Duis viverra justo aliquet, pellentesque sapien sed, pretium neque. Curabitur sit amet ante est. Nunc ut lorem eu risus auctor tristique laoreet id ante. Ut pulvinar feugiat lectus ut fermentum. Etiam pretium augue vel purus ultrices, at bibendum nisi dictum. Donec et neque vitae enim tempus sagittis. Nullam ultricies magna non lorem tempus, sed consequat turpis tincidunt. Donec rutrum convallis cursus. Morbi vestibulum sit amet ipsum ut pellentesque. Cras ut viverra urna. Sed lacinia vel ante a eleifend. Ut pharetra lorem ac mi pulvinar convallis. Phasellus vel tincidunt orci. Vestibulum rutrum interdum est nec ultricies. Praesent at nisl turpis. In hac habitasse platea dictumst. In ipsum nunc, euismod eget dapibus eget, posuere eu arcu. Praesent congue dignissim risus, id viverra enim. Mauris ligula nulla, mollis a mauris feugiat, commodo consequat est. Etiam tincidunt a nunc et elementum. Quisque semper massa augue, vitae congue magna auctor at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam accumsan, sem a varius placerat, leo est dapibus ex, id molestie purus mi in tortor. Vivamus laoreet, tellus a bibendum consequat, ipsum eros tincidunt magna, ut pretium urna orci et risus. Phasellus posuere tempus nisl, non placerat turpis. Ut eu libero at nulla dapibus dignissim at eu purus. Curabitur at accumsan enim.`;
    const actual = countWords(testString);
    const expected = 427;
    expect(actual).toBe(expected);
  });
});

describe("Testing countWords with non-standard strings", () => {
  test("correctly counts string with multiple spaces in a row", () => {
    const testString = `I'm a     short      string, but I have weird      spacing.`;
    const actual = countWords(testString);
    const expected = 9;
    expect(actual).toBe(expected);
  });

  test("correctly counts string with line breaks", () => {
    const testString = `I'm a string, but
I have line breaks. Sometimes it's one,


but sometimes it's more!




Look at all those lovely line breaks.`;
    const actual = countWords(testString);
    const expected = 22;
    expect(actual).toBe(expected);
  });
});
