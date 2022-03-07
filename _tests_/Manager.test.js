const Manager = require(`../lib/manager`);

describe('Manager', () => {
  it(`Should return the Manager's office number`, () => {
    const obj1 = new Manager('Spencer', 12, `none`, 13)

    expect(obj1.office).toEqual(13);
  });

});