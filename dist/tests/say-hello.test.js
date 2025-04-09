import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello akira', function () {
        expect(sayHello('akira')).toBe('Hello akira');
    });
});
