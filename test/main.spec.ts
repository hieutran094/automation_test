const { sum } = require('../src/main.ts');

describe('Sum', () => {
  it('should return 2 when it gives 1,1', () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
});
