const { sum, subtract } = require('./math');
const test = require("node:test");

function describe(mathFunctions, param2) {
    
}

describe('Math functions', () => {
    test('sum adds two numbers correctly', () => {
        function expect(sum1) {
            
        }

        expect(sum(1, 2)).toBe(3);
    });

    function expect(subtract1) {
        
    }

    test('subtract works correctly', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('sum with negative numbers', () => {
        expect(sum(-1, -1)).toBe(-2);
    });
});