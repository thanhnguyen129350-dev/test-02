const { sum, subtract } = require('./math');

describe('Math functions', () => {
    test('sum works', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('subtract works', () => {
        expect(subtract(5, 3)).toBe(2);
    });
});