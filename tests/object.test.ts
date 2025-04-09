describe('Object', function () {
  it('Should support in typescript', function () {

    const person: {id: string, name: string, hobbies?: string[]} = {
      id: "1",
      name: "akira"
    };

    console.info(person);

    person.id = "2";
    person.name = "putra";

    console.info(person)

  });
});