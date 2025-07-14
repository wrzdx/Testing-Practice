import calculator from "./calculator";

test("sum", () => {
    expect(calculator.add(1, 1.5)).toBeCloseTo(2.5);
});

test("subtract", () => {
    expect(calculator.subtract(1, 1.5)).toBeCloseTo(-0.5);
});

test("division", () => {
    expect(calculator.divide(3, 1.5)).toBeCloseTo(2);
});

test("division by zero", () => {
    expect(calculator.divide(3, 0)).toBe(Infinity);
});

test("multiplication", () => {
    expect(calculator.multiply(3, 2)).toBe(6);
});