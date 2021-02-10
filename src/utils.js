
/**
 * This Util module contains two methods, 
 * 1. printNumbers: For printing numbers & 
 * 2. areaOfTriangle: To calculate area a triangle from three vertices
 */
module.exports = {

    /**
     * Method to print numbers
     * @param {*} numbers 
     */
    printNumbers: (numbers) => {
        if (Array.isArray(numbers)) {
            for (const number of numbers) {
                console.log(number);
            }
        }
        else {
            console.log("Not a valid argument");
        }
    },

    /**
     * Method to calculate area of triangle from three vertices
     * @param {*} v1 
     * @param {*} v2 
     * @param {*} v3 
     */
    areaOfTriangle(v1, v2, v3) {
        v1 = parseInt(v1);
        v2 = parseInt(v2);
        v3 = parseInt(v3);
        if (v1 > 0 && v2 > 0 && v3 > 0) {
            const s = (v1 + v2 + v3) / 2;
            const area = parseFloat(Math.sqrt(s * ((s - v1) * (s - v2) * (s - v3))).toFixed(2));
            if (!area) return "Invalid vertices";
            return area;
        }
        else {
            return "Invalid vertices";
        }
    }
}