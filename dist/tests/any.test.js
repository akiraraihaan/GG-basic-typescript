"use strict";
describe('Any', function () {
    it('Should support in typescript', function () {
        const person = {
            id: 27,
            name: "akira",
            age: 20
        };
        person.age = 27;
        person.address = "budag";
        console.info(person);
    });
});
