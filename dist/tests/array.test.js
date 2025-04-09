"use strict";
describe('Array', function () {
    it('Should same with javascript', function () {
        const names = ["akira", "rehan", "joko"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('Should support readonly array', function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "Main game";
    });
    it('Should support tuple', function () {
        const person = ["akir", "rai", 27];
        console.info(person);
        // person[0] = "putra"; 
    });
});
