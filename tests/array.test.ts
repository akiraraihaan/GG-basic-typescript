describe('Array', function () {
  it('Should same with javascript', function () {

    const names: string[] = ["akira", "rehan", "joko"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);

  });

  it('Should support readonly array', function () {

    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = "Main game";

  });

  it('Should support tuple', function () {

    const person: readonly [string, string, number] = ["akir", "rai", 27];
    console.info(person);

    // person[0] = "putra"; 

  });

});