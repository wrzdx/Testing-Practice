import capitalize from "./capitalize"

test("emtpy string", () => {
    expect(capitalize("")).toBe("");
});

test("without arguments", () => {
    expect(capitalize()).toBe(null);
});

test("not capitalized", () => {
    expect(capitalize("regular string")).toBe("Regular string")
});

test("capitalized", () => {
    expect(capitalize("Regular string")).toBe("Regular string")
})

test("number", () => {
    expect(capitalize(1)).toBe(1)
})