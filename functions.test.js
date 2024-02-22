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
  it('should return false when false is passed',()=>{
    //arrange
    const value = false;
    //act
    const result = functions.checkTruthy(value);
    //assert 
    expect(result).toBe(false);
  });
  it('should return false when any other value is passed',()=>{
    //arrange
    const value = 0;
    //act
    const result= functions.checkTruthy(value);
    //assert
    expect(result).toBe(false)
  })
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
describe('divide function', () =>{
  it('should return the division of two numbers',() =>{
    //arrange
    const num1 = 10;
    const num2 = 2;
    //act
    const result = functions.divide(num1, num2);
    //asert
    expect(result).toBe(5);
  });
  it('should return infinity when dividing by zero',() =>{
    //arrange
    const num1= 5;
    const num2 = 0;
    //act
    const result = functions.divide(num1, num2);
    //asert
    expect(result).toBe(Infinity);
  });
});
describe('formateName function', () =>{
  it('should return a formatted name string', ()=>{
    //arrange
    const firstName = 'Katherine';
    const lastName= 'Toro';
    //act
    const result = functions.formateName(firstName,lastName);
    //asert
    expect(result).toBe('Katherine, Toro');
  });
});
