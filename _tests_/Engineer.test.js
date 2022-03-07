const Engineer = require(`../lib/engineer`);

describe('Engineer', () => {
  it(`Should return the Engineers github username`, () => {
    const obj1 = new Engineer('Spencer', 12, `none`, `Skerans`)

    expect(obj1.github).toEqual('Skerans');
  });

});
