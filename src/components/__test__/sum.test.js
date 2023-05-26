// const sum = require("../sum")
import sum from "../sum"; //we are using import export with help of babel updating our .babelrc file with preset

test('Sum should be 6', () => {
    expect(sum(3, 3)).toBe(6);

})