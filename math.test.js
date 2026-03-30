const { sum, subtract, division } = require('./math');
const test = require("node:test");

function describe(mathFunctions, param2) {

}

function expect(subtract1) {

}

describe('Math functions', () => {
    test('sum adds two numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('subtract works correctly', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('sum with negative numbers', () => {
        expect(sum(-1, -1)).toBe(-2);
    });

    test('division between a and b', () => {
        expect(division(10, 5)).toBe(2);
    });
});