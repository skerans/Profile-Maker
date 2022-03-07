const Intern = require(`../lib/intern`);

describe('Intern', () => {
  it(`Should return the school that the intern is attending`, () => {
    const obj1 = new Intern('Spencer', 13, `none`, `Humboldt`)

    expect(obj1.school).toEqual('Humboldt');
  });

});