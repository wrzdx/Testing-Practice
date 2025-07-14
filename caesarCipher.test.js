import caesarCipher from "./caesarCipher";

test("empty string", () => {
    expect(caesarCipher("", 0)).toBe("");
    expect(caesarCipher("", 2)).toBe("");
})

test("regular string", () => {
    expect(caesarCipher("abc", 0)).toBe("abc");
    expect(caesarCipher("abc", 2)).toBe("cde");
})

test("special string", () => {
    expect(caesarCipher("xyz", 0)).toBe("xyz");
    expect(caesarCipher("xyz", 2)).toBe("zab");
})

test("special big letter string", () => {
    expect(caesarCipher("XYZ", 0)).toBe("XYZ");
    expect(caesarCipher("XYZ", 2)).toBe("ZAB");
})

test("odin", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
})