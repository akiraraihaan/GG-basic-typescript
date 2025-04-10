import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { sayHello } from "../src/say-hello";
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

  it('should support indexable interface', function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["akira", "rai", "han"];

    console.info(names);
  });

  it('should support indexable interface for non number index', function () {

    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      "name": "akira",
      "country": "indo"
    }

    expect(dictionary["name"]).toBe("akira")
    expect(dictionary["country"]).toBe("indo")

  });

  it('Should support extends interface', function () {
    
    const employee: Employee = {
      id: "1",
      name: "akira",
      div: "support"
    };

    console.info(employee);
    
    const manager: Manager = {
      id: "3",
      name: "raiz",
      div: "IT",
      numberOfEmployees: 10
    };
    
    console.info(manager);

  });

  it('should support function in interface', function () {

    const person: Person = {
      name: "akira",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`
      }
    }

    console.info(person.sayHello("budi"));

  });

  it('should support inersection types', function () {

    interface HasName {
      name: string;
    };

    interface HasId {
      id: string;
    };
    
    type Domain = HasName & HasId;

    const domain: Domain = {
      id: "1",
      name: "akira"
    };

    console.info(domain);

  });

  it('Should support type assertions', function () {
    
    const person: any = {
      name: "akira",
      age: 27
    }

    const person2: Person = person as Person;

    console.info(person2);

  });

});