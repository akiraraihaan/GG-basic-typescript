describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'akia',
            nib: '1212',
            npwp: '9090',
            address: 'budag'
        };
        seller.id = 2;
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (val1, val2) => {
            return val1 + val2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', function () {
        const names = ["akira", "rai", "han"];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            "name": "akira",
            "country": "indo"
        };
        expect(dictionary["name"]).toBe("akira");
        expect(dictionary["country"]).toBe("indo");
    });
    it('Should support extends interface', function () {
        const employee = {
            id: "1",
            name: "akira",
            div: "support"
        };
        console.info(employee);
        const manager = {
            id: "3",
            name: "raiz",
            div: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "akira",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("budi"));
    });
    it('should support inersection types', function () {
        ;
        ;
        const domain = {
            id: "1",
            name: "akira"
        };
        console.info(domain);
    });
    it('Should support type assertions', function () {
        const person = {
            name: "akira",
            age: 27
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
