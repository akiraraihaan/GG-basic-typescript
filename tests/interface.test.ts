import { Seller } from "../src/seller";

describe('Interface', function () {
  it('should support in typescript', function () {

    const seller: Seller = {
      id: 1,
      name: 'akia',
      nib: '1212',
      npwp: '9090',
      address: 'budag'
    }

    seller.id = 2;
    console.info(seller);

  });

  it('should support function interface', function () {
    
    interface addFunciton {
      (val1: number, val2: number): number;
    }

    const add: addFunciton = (val1: number, val2: number): number => {
      return val1 + val2;
    }

    expect(add(2, 2)).toBe(4)

  });

});