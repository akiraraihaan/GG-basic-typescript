"use strict";
describe('Function', function () {
    it('should support in typescript and def val', function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello("akira")).toBe('Hello akira');
        expect(sayHello()).toBe('Hello Guest');
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("akira");
    });
    it('should support rest parameter', function () {
        function sum(...values) {
            let total = 0;
            for (const val of values) {
                total += val;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4)).toBe(10);
    });
    it('should support optional parameter', function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("raihan", "akira")).toBe("Hello raihan akira");
        expect(sayHello("raihan")).toBe("Hello raihan");
    });
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("oioi")).toBe("OIOI");
    });
    it('should support funtion as parameter', function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("akira", toUpper)).toBe("Hello AKIRA");
        // alternative (anonymous func)
        expect(sayHello("akira", function (name) {
            return name.toUpperCase();
        })).toBe("Hello AKIRA");
        // alternative (arrow func)
        expect(sayHello("akira", (name) => name.toUpperCase())).toBe("Hello AKIRA");
    });
});
