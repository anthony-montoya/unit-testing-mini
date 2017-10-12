const functions = require('./functions');

test('returnTwo() should return 2', () => {
    expect(functions.returnTwo()).toEqual(2);
})

test('greeting() should return Hello, then name param', () => {
    expect(functions.greeting('James')).toEqual('Hello, James.');
    expect(functions.greeting('Jill')).toEqual('Hello, Jill.');
})

describe('Math methods:', function() {
    test('add() should produce the sum of the two passed in params', () => {
        expect(functions.add(1, 2)).toEqual(3);
        expect(functions.add(5, 9)).toEqual(14);
    })

    test('subtract() should give us the result of subtracting the two params', () => {
        expect(functions.subtract(5, 1)).toEqual(4);
        expect(functions.subtract(10, 9)).toEqual(1);
    })

    test('multiply() should give us the result of two multiplied params', () => {
        expect(functions.multiply(5, 4)).toEqual(20);
        expect(functions.multiply(10, 7)).toEqual(70);
    })

    test('divide() should give us the quotient of the two passed in params', () => {
        expect(functions.divide(8, 2)).toEqual(4);
        expect(functions.divide(9, 3)).toEqual(3);
    })

})