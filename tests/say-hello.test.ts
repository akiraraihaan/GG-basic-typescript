import {sayHello} from "../src/say-hello"

describe('sayHello', function (): void {
  it('should return hello akira', function (): void {
    expect(sayHello('akira')).toBe('Hello akira');
  });
});