import reverseString from "./reverse";


test("emtpy string", () => {
    expect(reverseString("")).toBe("");
});

test("without arguments", () => {
    expect(reverseString()).toBe(null);
});

test("even length", () => {
    expect(reverseString("ball")).toBe("llab")
});

test("odd length", () => {
    expect(reverseString("cat")).toBe("tac")
})

test("number", () => {
    expect(reverseString(1)).toBe(1)
})