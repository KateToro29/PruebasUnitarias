const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const num1 = 3;
    const num2 = 5;

    //ACT
    const result = functions.multiply(num1, num2);
    //ASSERT
    expect(result).toBe(15);
  })
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();
    //ASSERT
    expect(result).toBeNull();
  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const value = true;
    //ACT
    const result = functions.checkTruthy(value);
    //ASSERT
    expect(result).toBe(true);
  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const addLastName = 'Toro';
    //ACT
    const result = functions.addLastName(lastName);
    //ASSERT
    expect(result).toEqual({firstname:'Katherine',lastname:'Toro'});
  });
})