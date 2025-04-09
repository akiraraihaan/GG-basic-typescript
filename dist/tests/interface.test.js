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
});
export {};
