import { CustomerType } from "../src/enum";
describe('Enum', function () {
    it('Should support in typescript', function () {
        const customer = {
            id: 1,
            name: "akira",
            type: CustomerType.GOLD
        };
        console.info(customer);
    });
});
