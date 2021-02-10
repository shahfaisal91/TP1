const utils = require('../utils');

describe('Print the numbers', () => {
    
    it('Print the numbers 1,2,3,4,5,6,7,9,10', () => {
        console.log = jest.fn();
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        utils.printNumbers(numbers);
        for (let index = 0; index < numbers.length; index++) {
            expect(console.log).toHaveBeenCalledWith(numbers[index]);
        }
    });

    it('Error scenario, if the argument is not array', () => {
        console.log = jest.fn();
        utils.printNumbers(1);
        expect(console.log).toHaveBeenCalledWith("Not a valid aghument");
    });
});


describe('Calculate the area of a triangle from three vertices', () => {
    
    it('If all vertices are valid & integer', () => {
        const v1 = 5; 
        const v2 = 6; 
        const v3 = 7; 
        const area = utils.areaOfTriangle(v1, v2, v3);    
        expect(area).toEqual(14.70);
    });

    it('If any vertices of the triangle is in string', () => {
        const area = utils.areaOfTriangle('5',6,'7');
        expect(area).toEqual(14.70);
    });

    it('Error scenario, if any vertice of the triangle is missing', () => {
        const area = utils.areaOfTriangle(2);
        expect(area).toEqual('Invalid vertices');
    });

    it('Error scenario, if vertices of the triangle are negative value', () => {
        const area = utils.areaOfTriangle(-5,6,-7);
        expect(area).toEqual('Invalid vertices');
    });

    it('Error scenario, if vertices arguments are incorrect & as string', () => {
        const area = utils.areaOfTriangle('10,2,3');
        expect(area).toEqual('Invalid vertices');
    });
});