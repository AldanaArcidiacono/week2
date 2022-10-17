import { calcNeighborSum } from './gol.js';

const mock = [
    [1, 0, 1],
    [0, 1, 1],
    [1, 1, 0],
];

const testCases = [
    { i: 0, j: 0, r: 1 },
    { i: 0, j: 1, r: 4 },
    { i: 0, j: 2, r: 2 },

    { i: 1, j: 0, r: 4 },
    { i: 1, j: 1, r: 5 },
    { i: 1, j: 2, r: 3 },

    { i: 2, j: 0, r: 2 },
    { i: 2, j: 1, r: 3 },
    { i: 2, j: 2, r: 3 },
];

describe('Given calcNeighborSum ', () => {
    testCases.forEach((item) => {
        test(`When i = ${item.i}, j = ${item.j}, then result should be ${item.r}`, () => {
            // Arrange
            const i = item.i;
            const j = item.j;
            const expectedResult = item.r;

            // Act
            const result = calcNeighborSum(i, j, mock);

            // Assert
            expect(result).toBe(expectedResult);
        });
    });
});
