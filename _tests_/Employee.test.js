const Employee = require(`../lib/employee`);

describe('Employee', () => {
  it(`Should return the name of the employee`, () => {
    const obj1 = new Employee('Spencer')

    expect(obj1.name).toEqual('Spencer');
  });

  it(`Should return the employee's ID`, () => {
    const obj2 = new Employee(`Spencer`, 12)

    expect(obj2.id).toEqual(12);
  })

  it(`Should return the employee's email address`, () => {
    const obj3 = new Employee(`Spencer`, 12, `none`)

    expect(obj3.email).toEqual(`none`);
  })
});
