"use strict";
describe('Optional parameter', function () {
    it('Should support null and undefined', function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info('Hello');
            }
        }
        sayHello("akira");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
