import operate from "./operate";

describe('Unit testing operate()', ()=>{
    const num1 = 5;
    const num2 = 5;

    test('test addition operation', ()=>{
        let result = operate(num1, num2,'+');

        expect(result).toBe('10');
    });

    test('test subtraction operation', ()=>{
        let result = operate(num1, num2,'-');

        expect(result).toBe('0');
    });

    test('test multiplication operation', ()=>{
        let result = operate(num1, num2,'x');

        expect(result).toBe('25');
    });

    test('test division operation', ()=>{
        let result = operate(num1, num2,'÷');

        expect(result).toBe('1');
    });

    test('test modulo operation', ()=>{
        let result = operate(num1, num2,'%');

        expect(result).toBe('0');
    });

    

});